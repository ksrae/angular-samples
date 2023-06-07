import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputaComponent } from './inputa.component';

describe('InputaComponent', () => {
  let component: InputaComponent;
  let fixture: ComponentFixture<InputaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
