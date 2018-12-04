import { Component } from "@angular/core";
@Component({
  selector: "app-reloj",
  template: `
    <div class="reloj">
      <span class="hours">{{ hours }}</span>
      <span class="minutes"> : {{ minutes }} </span>
      <span class="seconds"> : {{ seconds }} </span>
    </div>
  `,
  styles: [
    `
      .reloj {
        font-size: 2em;
      }
      .hours {
        font-weight: 800;
        opacity: 0.6;
      }

      .minutes {
        font-weight: 600;
        opacity: 0.8;

      }

      .seconds {
        font-weight:400;
      }
    `
  ]
})
export class RelojComponent {
  hours: number;
  minutes: number;
  seconds: number;
  constructor() {
    this.updateTime()
    setInterval(this.updateTime, 1000);
  }
  updateTime = () => {
    let time = new Date();
    this.hours = time.getHours();
    this.minutes = time.getMinutes();
    this.seconds = time.getSeconds();
  }
}
