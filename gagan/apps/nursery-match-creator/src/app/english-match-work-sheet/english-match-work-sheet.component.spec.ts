import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishMatchWorkSheetComponent } from './english-match-work-sheet.component';

describe('EnglishMatchWorkSheetComponent', () => {
  let component: EnglishMatchWorkSheetComponent;
  let fixture: ComponentFixture<EnglishMatchWorkSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishMatchWorkSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishMatchWorkSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
