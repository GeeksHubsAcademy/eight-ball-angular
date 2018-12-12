import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

import { LoggerService } from "./logger.service";
import { EightBallComponent } from './eight-ball/eight-ball.component';
import { RelojComponent } from './reloj/reloj.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, InputComponent, OutputComponent, EightBallComponent, RelojComponent, HomeComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
