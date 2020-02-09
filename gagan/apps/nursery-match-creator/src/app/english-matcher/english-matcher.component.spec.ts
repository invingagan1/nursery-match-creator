import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishMatcherComponent } from './english-matcher.component';

describe('EnglishMatcherComponent', () => {
  let component: EnglishMatcherComponent;
  let fixture: ComponentFixture<EnglishMatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishMatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishMatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
