import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningReadingComponent } from './listening-reading.component';

describe('ListeningReadingComponent', () => {
  let component: ListeningReadingComponent;
  let fixture: ComponentFixture<ListeningReadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeningReadingComponent]
    });
    fixture = TestBed.createComponent(ListeningReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
