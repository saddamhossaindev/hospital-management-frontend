import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseCreateComponent } from './nurse-create.component';

describe('NurseCreateComponent', () => {
  let component: NurseCreateComponent;
  let fixture: ComponentFixture<NurseCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NurseCreateComponent]
    });
    fixture = TestBed.createComponent(NurseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
