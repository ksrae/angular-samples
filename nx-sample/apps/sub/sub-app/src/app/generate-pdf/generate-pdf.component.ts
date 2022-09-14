import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { DataComponent } from '../data/data.component';

@Component({
  selector: 'nx-sample-generate-pdf',
  templateUrl: './generate-pdf.component.html',
  styleUrls: ['./generate-pdf.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneratePDFComponent implements OnInit {
  @ViewChild('tableData', {static: false}) tableData!: DataComponent;

  @ViewChild('content') content!: ElementRef;
  constructor() {

  }

  ngOnInit(): void {

  }
  savePdf() {
    const doc = new jsPDF({
      orientation: 'p',
      compress: true
    });

    const pdfTable = this.tableData.pdfTable.nativeElement;

    console.log({pdfTable});




    doc.html(pdfTable.innerHTML, {
      callback(rst: jsPDF) {
        rst.save('one.pdf');
      },
      x: 10,
      y: 10,
      autoPaging: true,
      image: {
        type: 'png',
        quality: 1000
      },

    });

  }

  printAll() {
    window.print();
  }

}
    // await html2canvas(pdfTable).then(canvas => {
    //   const contentDataURL = canvas.toDataURL('image/png')  // 'image/jpeg' for lower quality output.
    //   const pdf = new jsPDF('l', 'cm', 'a4'); //Generates PDF in landscape mode
    //   // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
    //   pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);
    //   pdf.save('Filename.pdf');


    // });
