import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaconavesComponent } from './espaconaves.component';

describe('EspaconavesComponent', () => {
  let component: EspaconavesComponent;
  let fixture: ComponentFixture<EspaconavesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspaconavesComponent]
    });
    fixture = TestBed.createComponent(EspaconavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
