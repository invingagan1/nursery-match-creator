import { Component, OnInit } from '@angular/core';
import { CapitalLetters, Letters, SmallLetters } from '../core/enum/index';
import { Router } from '@angular/router';

@Component({
  selector: 'gagan-english-matcher',
  templateUrl: './english-matcher.component.html',
  styleUrls: ['./english-matcher.component.scss']
})
export class EnglishMatcherComponent implements OnInit {

  public letters = Letters;
  public smallLetters = SmallLetters;
  public capitalLetters = CapitalLetters;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  public createWorkSheet(leftSide, rightSide, from, to) {
    console.log(leftSide, rightSide, from, to);
    this.router.navigate(['/work-sheet'], {
      queryParams: {
        leftSide,rightSide,from,to
      },
      preserveQueryParams: true,
      queryParamsHandling: "merge"
    });
  }
}
