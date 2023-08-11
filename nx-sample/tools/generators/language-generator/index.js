const excel = require('exceljs');
// https://github.com/exceljs/exceljs
// https://www.tabnine.com/code/javascript/modules/exceljs
const fs = require('fs');

// 언어파일을 저장할 기본 폴더
const languageFolderPath = './i18n';
const worksheet = 'company';
// 언어값 보관용 배열
let languages = [];
// 회사명 보관용 배열
let companies = [];

let workbook = new excel.Workbook();
// 모든 데이터를 언어별로 보관용 배열
let data = [];

// 언어가 없으면 2, 있으면 3 행부터 시작
let startRowIndex = 2;

// excel 파일 읽어옴.
workbook.xlsx.readFile('./test.xlsx').then(() => {
    var sheet = workbook.getWorksheet(worksheet);

    // header 영역
    // header - language값 구하기
    // 첫 줄은 모두 언어 배열에 저장
    sheet.getRow(1).eachCell((cell, index) => {
      languages.push(cell.toString());
    });
    // languages의 불필요한 값 (key) 필터링
    languages.shift();

    // company가 있으면
    // startRowIndex를 1 증가
    // companies 배열에 모두 저장
    if(sheet.getRow(2).getCell(1).toString().toLowerCase() === 'company') {
      startRowIndex++;
      sheet.getRow(2).eachCell((cell, index) => {
        companies.push(cell.toString());
      });
    }

    // companies의 불필요한 값 (company) 필터링
    // 중복 회사값 제거
    companies.shift();
    companies = [...new Set(companies)];


    // 폴더 관리 영역
    // 언어 폴더가 존재하면 제거한다.
    if (fs.existsSync(languageFolderPath)) {
      fs.rmSync(languageFolderPath, { recursive: true, force: true });
    }
    // 다시 언어 폴더를 생성한다.
    fs.mkdirSync(languageFolderPath);
    // company별 회사명 별 폴더를 생성한다.
    for(let k=0; k<companies.length; k++) {
      if (!fs.existsSync(`${languageFolderPath}/${companies[k]}`)) {
        fs.mkdirSync(`${languageFolderPath}/${companies[k]}`);
      }
    }


    // 실 데이터 저장 영역
    // 실제 데이터가 있는 row부터 읽어옴.
    for (let i = startRowIndex; i <= sheet.actualRowCount; i++) {

      for(let j = 0; j< languages.length; j++) {

        let key = sheet.getRow(i).getCell(1).toString();
        // 회사명이 없으면 언어 단위로 데이터를 저장
        let valuebycompany = sheet.getRow(i).getCell(j+2).toString();
        let index = j;

        // 회사명이 존재하면,
        if(companies.length) {
          for(let k=0; k< companies.length; k++) {
            // 회사명 단위로 데이터를 저장
            index = k+(companies.length * j);
            valuebycompany = sheet.getRow(i).getCell(index+2).toString();
            data[index] = addMapping(data[index], key, valuebycompany);
          }
        } else {
          // 언어 단위로 데이터를 저장
          data[index] = addMapping(data[index], key, valuebycompany);
        }
      }
    }

    // 파일 저장 영역
    for(let i=0; i<data.length; i++) {

      for(let j=0; j<languages.length; j++) {
        let index = companies.length ? j * companies.length: j;
        let lang = sheet.getRow(1).getCell(index+2).toString();

        if(companies.length) {
          // 회사명 폴더 안에 언어별로 파일 생성
          for(let k=0; k<companies.length; k++) {
            let companyName = sheet.getRow(2).getCell(k+2).toString();
            fs.writeFileSync(`./i18n/${companyName}/${lang}.json`, JSON.stringify(data[k + index], null, 2));
          }
        }
        else {
          // 언어 폴더 안에 언어별로 파일 생성
          fs.writeFileSync(`./i18n/${lang}.json`, JSON.stringify(data[index], null, 2));
        }

      }

    }

}).catch(err => console.log({err}))

// data 반복 mapping
function addMapping(data, key, value) {
  return {
    ...data,
    [key]: value
  }
}
