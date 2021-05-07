import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayuotComponent } from './layuot.component';

describe('LayuotComponent', () => {
  let component: LayuotComponent;
  let fixture: ComponentFixture<LayuotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayuotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayuotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
