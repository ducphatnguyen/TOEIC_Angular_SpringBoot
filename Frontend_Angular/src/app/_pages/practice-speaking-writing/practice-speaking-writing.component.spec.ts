import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeSpeakingWritingComponent } from './practice-speaking-writing.component';

describe('PracticeSpeakingWritingComponent', () => {
  let component: PracticeSpeakingWritingComponent;
  let fixture: ComponentFixture<PracticeSpeakingWritingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracticeSpeakingWritingComponent]
    });
    fixture = TestBed.createComponent(PracticeSpeakingWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
