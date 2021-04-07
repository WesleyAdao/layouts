import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayflexComponent } from './layflex.component';

describe('LayflexComponent', () => {
  let component: LayflexComponent;
  let fixture: ComponentFixture<LayflexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayflexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
