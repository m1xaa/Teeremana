import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrainingModalComponent } from './update-training-modal.component';

describe('UpdateTrainingModalComponent', () => {
  let component: UpdateTrainingModalComponent;
  let fixture: ComponentFixture<UpdateTrainingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateTrainingModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTrainingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
