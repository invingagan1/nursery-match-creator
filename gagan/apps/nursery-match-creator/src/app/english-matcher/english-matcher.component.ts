import { Component, OnInit } from '@angular/core';
import { CapitalLetters, Letters, SmallLetters } from '../core/enum/index';

@Component({
  selector: 'gagan-english-matcher',
  templateUrl: './english-matcher.component.html',
  styleUrls: ['./english-matcher.component.scss']
})
export class EnglishMatcherComponent implements OnInit {

  public letters = Letters;
  public smallLetters = SmallLetters;
  public capitalLetters = CapitalLetters;
  constructor() { }

  ngOnInit() {
  }
  public createWorkSheet(leftSide, rightSide, from, to) {
    console.log(leftSide, rightSide, from, to);
  }
}
