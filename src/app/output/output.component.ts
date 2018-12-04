import { Component, Input } from '@angular/core';


import {Response} from '../../models/response';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})

export class OutputComponent  {
  @Input() responses: Array<Response>;
  constructor() { }

}
