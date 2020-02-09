import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnglishMatcherComponent } from './english-matcher.component';
import { MaterialModule } from '../material/material.module';
import { Routes, RouterModule } from '@angular/router';
import { EnglishMatchWorkSheetComponent } from '../english-match-work-sheet/english-match-work-sheet.component';

const routes: Routes = [
  {
    path: "",
    component: EnglishMatcherComponent
  },
  {
    path: "/work-sheet",
    component: EnglishMatchWorkSheetComponent
  }
]

@NgModule({
  declarations: [EnglishMatcherComponent, EnglishMatchWorkSheetComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class EnglishMatcherModule { }
