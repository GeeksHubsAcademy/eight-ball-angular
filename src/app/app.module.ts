import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

import { LoggerService } from "./logger.service";
import { EightBallComponent } from './eight-ball/eight-ball.component';
import { RelojComponent } from './reloj/reloj.component';

@NgModule({
  declarations: [AppComponent, InputComponent, OutputComponent, EightBallComponent, RelojComponent],
  imports: [BrowserModule, FormsModule],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
