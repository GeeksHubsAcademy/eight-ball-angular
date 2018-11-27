import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Output() onNewQuestion = new EventEmitter<string>()
  currentQuestion = '';
  submit() {
    console.log(this.currentQuestion)
    this.onNewQuestion.emit(this.currentQuestion);
    this.currentQuestion = '';


  }

}
