import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProblemFourComponent } from './problem-four/problem-four.component';
import { ProblemThreeComponent } from './problem-three/problem-three.component';
import { ProblemTwoComponent } from './problem-two/problem-two.component';
import { ProblemOneComponent } from './problem-one/problem-one.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemFourComponent,
    ProblemThreeComponent,
    ProblemTwoComponent,
    ProblemOneComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
