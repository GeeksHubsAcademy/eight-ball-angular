import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

 log(...msg: Array<any>) {
   console.log( 'todos los logs:', ...msg)
 }

  error(msg: any) {
    console.error(msg)
  }
}
