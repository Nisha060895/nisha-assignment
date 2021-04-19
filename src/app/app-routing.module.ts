import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


import { ProblemFourComponent } from './problem-four/problem-four.component';
import { ProblemOneComponent } from './problem-one/problem-one.component';
import { ProblemThreeComponent } from './problem-three/problem-three.component';
import { ProblemTwoComponent } from './problem-two/problem-two.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'problem-one',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'problem-one',
    component: ProblemOneComponent
  },
  {
    path: 'problem-two',
    component: ProblemTwoComponent
  },
  {
    path: 'problem-three',
    component: ProblemThreeComponent
  },
  {
    path: 'problem-four',
    component: ProblemFourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
