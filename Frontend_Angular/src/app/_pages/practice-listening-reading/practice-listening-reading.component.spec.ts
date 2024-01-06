import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeListeningReadingComponent } from './practice-listening-reading.component';

describe('PracticeListeningReadingComponent', () => {
  let component: PracticeListeningReadingComponent;
  let fixture: ComponentFixture<PracticeListeningReadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracticeListeningReadingComponent]
    });
    fixture = TestBed.createComponent(PracticeListeningReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
