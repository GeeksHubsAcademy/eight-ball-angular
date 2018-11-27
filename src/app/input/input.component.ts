import { Component, Output, EventEmitter } from "@angular/core";
import { LoggerService } from "../logger.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Output() onNewQuestion = new EventEmitter<string>()
  constructor(private logger: LoggerService) {}
  currentQuestion = '';
  submit() {
    this.logger.log(this.currentQuestion)
    this.onNewQuestion.emit(this.currentQuestion);
    this.currentQuestion = '';


  }

}
