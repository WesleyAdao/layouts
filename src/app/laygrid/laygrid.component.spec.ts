import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaygridComponent } from './laygrid.component';

describe('LaygridComponent', () => {
  let component: LaygridComponent;
  let fixture: ComponentFixture<LaygridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaygridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaygridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
