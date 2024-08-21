import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTrainingModalComponent } from './delete-training-modal.component';

describe('DeleteTrainingModalComponent', () => {
  let component: DeleteTrainingModalComponent;
  let fixture: ComponentFixture<DeleteTrainingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteTrainingModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTrainingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
