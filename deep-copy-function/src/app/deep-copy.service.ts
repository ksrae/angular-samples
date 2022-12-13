import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DeepCopyService {
  // 배열에도 대응 가능
  cloneObject(obj: any) {
    let clone: any = {};
    for (let key in obj) {
      if (typeof obj[key] == "object" && obj[key] != null) {
        clone[key] = this.cloneObject(obj[key]);
      } else {
        clone[key] = obj[key];
      }
    }

    return clone;
  };
}
