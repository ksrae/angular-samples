import { ErrorHandler, Injectable } from "@angular/core";


export class MyErrorHandler implements ErrorHandler {
  constructor(

  ) {}

  handleError(error: any) {
    // do something with the exception
    console.log('===========', error);

  }
}
