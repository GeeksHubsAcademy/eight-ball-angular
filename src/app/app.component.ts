import { Component } from "@angular/core";
import { Response } from '../models/response';

import {LoggerService } from './logger.service';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  answers = [
    { type: "afirmative", text: "En mi opinión, sí" },
    { type: "afirmative", text: "Es cierto" },
    { type: "afirmative", text: "Es decididamente así" },
    { type: "afirmative", text: "Probablemente" },
    { type: "afirmative", text: "Buen pronóstico" },
    { type: "afirmative", text: "Todo apunta a que sí" },
    { type: "afirmative", text: "Sin duda" },
    { type: "afirmative", text: "Sí" },
    { type: "afirmative", text: "Sí - definitivamente" },
    { type: "afirmative", text: "Debes confiar en ello" },
    { type: "doubt", text: "Respuesta vaga, vuelve a intentarlo" },
    { type: "doubt", text: "Pregunta en otro momento" },
    { type: "doubt", text: "Será mejor que no te lo diga ahora" },
    { type: "doubt", text: "No puedo predecirlo ahora" },
    { type: "doubt", text: "Concéntrate y vuelve a preguntar" },
    { type: "negative", text: "No cuentes con ello" },
    { type: "negative", text: "Mi respuesta es no" },
    { type: "negative", text: "Mis fuentes me dicen que no" },
    { type: "negative", text: "Las perspectivas no son buenas" },
    { type: "negative", text: "Muy dudoso" }
  ];
  responses: Array<Response> = [];
  constructor(private logger: LoggerService) {}
  newQuestion(question) {
    const currentQuestion = question.trim();

    this.logger.log(currentQuestion, "padre");

    if (currentQuestion !== "") {
      const randomIndex = Math.floor(Math.random() * this.answers.length);

      const newAnswer: Response = {
        question: currentQuestion,
        answer: this.answers[randomIndex]
      };
      this.responses.unshift(newAnswer);
    } else {
      this.logger.error("pregunta que no preguntas");
    }
  }
}
