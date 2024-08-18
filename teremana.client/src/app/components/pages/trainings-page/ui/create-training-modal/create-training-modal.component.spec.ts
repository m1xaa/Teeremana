import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrainingModalComponent } from './create-training-modal.component';

describe('CreateTrainingModalComponent', () => {
  let component: CreateTrainingModalComponent;
  let fixture: ComponentFixture<CreateTrainingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTrainingModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTrainingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
