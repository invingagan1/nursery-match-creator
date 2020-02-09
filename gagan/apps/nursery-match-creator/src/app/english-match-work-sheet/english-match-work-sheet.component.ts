import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

interface item {
  left: string,
  right: string
}

@Component({
  selector: 'gagan-english-match-work-sheet',
  templateUrl: './english-match-work-sheet.component.html',
  styleUrls: ['./english-match-work-sheet.component.scss']
})
export class EnglishMatchWorkSheetComponent implements OnInit {

  public items: item[] = [];
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      for (let i = 0; i < 24; i++) {
        this.items.push({
          left: "a",
          right: "b"
        });
      }
    });
  }

}
