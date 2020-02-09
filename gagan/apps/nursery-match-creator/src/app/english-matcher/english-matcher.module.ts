import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnglishMatcherComponent } from './english-matcher.component';
import { MaterialModule } from '../material/material.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: EnglishMatcherComponent
  }
]

@NgModule({
  declarations: [EnglishMatcherComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class EnglishMatcherModule { }
