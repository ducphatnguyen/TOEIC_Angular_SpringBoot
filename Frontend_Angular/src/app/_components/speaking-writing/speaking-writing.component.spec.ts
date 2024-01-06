import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakingWritingComponent } from './speaking-writing.component';

describe('SpeakingWritingComponent', () => {
  let component: SpeakingWritingComponent;
  let fixture: ComponentFixture<SpeakingWritingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeakingWritingComponent]
    });
    fixture = TestBed.createComponent(SpeakingWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
