import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class LoggerService {

 log(...msg: Array<any>) {
   if (!environment.production) {

    console.log( 'todos los logs:', ...msg)
   }
 }
  error(msg: any) {
    console.error(msg)
  }
}
