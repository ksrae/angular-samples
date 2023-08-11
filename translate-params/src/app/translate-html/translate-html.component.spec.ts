import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateHtmlComponent } from './translate-html.component';

describe('TranslateHtmlComponent', () => {
  let component: TranslateHtmlComponent;
  let fixture: ComponentFixture<TranslateHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslateHtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslateHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
