import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressFormPageComponent } from './progress-form-page.component';

describe('ProgressFormPageComponent', () => {
  let component: ProgressFormPageComponent;
  let fixture: ComponentFixture<ProgressFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressFormPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
