import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProblemFourComponent } from './problem-four/problem-four.component';
import { ProblemThreeComponent } from './problem-three/problem-three.component';
import { ProblemTwoComponent } from './problem-two/problem-two.component';
import { ProblemOneComponent } from './problem-one/problem-one.component';
import { HomeComponent } from './home/home.component';
import { CornerFourComponent } from './problem-four/corner-four/corner-four.component';
import { CornerThreeComponent } from './problem-four/corner-three/corner-three.component';
import { CornerTwoComponent } from './problem-four/corner-two/corner-two.component';
import { CornerOneComponent } from './problem-four/corner-one/corner-one.component';
import { CenterOneComponent } from './problem-four/center-one/center-one.component';
import { CompYComponent } from './problem-two/comp-y/comp-y.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemFourComponent,
    ProblemThreeComponent,
    ProblemTwoComponent,
    ProblemOneComponent,
    HomeComponent,
    CornerFourComponent,
    CornerThreeComponent,
    CornerTwoComponent,
    CornerOneComponent,
    CenterOneComponent,
    CompYComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
