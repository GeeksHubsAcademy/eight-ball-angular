import { Component, OnInit } from '@angular/core';
import { Response } from '../../models/response';

import { LoggerService } from '../logger.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  question: string;
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
  responses: Array<Response> =
    JSON.parse(localStorage.getItem("responses")) || [];
  constructor(private logger: LoggerService, private route: ActivatedRoute) {}
  ngOnInit() {
    const question = this.route.snapshot.paramMap.get("query");
    if (question) {
      this.newQuestion(question.trim());

    }
  }
  newQuestion(question) {

    // update url query


    const currentQuestion = question.trim();

    this.logger.log(currentQuestion, "padre");

    if (currentQuestion !== "") {
      const randomIndex = Math.floor(Math.random() * this.answers.length);

      const newAnswer: Response = {
        question: currentQuestion,
        answer: this.answers[randomIndex]
      };
      this.responses.unshift(newAnswer);
      localStorage.setItem("responses", JSON.stringify(this.responses));
    } else {
      this.logger.error("pregunta que no preguntas");
    }
  }
}
