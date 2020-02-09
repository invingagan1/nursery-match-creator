import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'gagan-english-match-work-sheet',
  templateUrl: './english-match-work-sheet.component.html',
  styleUrls: ['./english-match-work-sheet.component.scss']
})
export class EnglishMatchWorkSheetComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      console.log(params);
    });
  }

}
