import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestElementrefComponent } from './test-elementref.component';

describe('TestElementrefComponent', () => {
  let component: TestElementrefComponent;
  let fixture: ComponentFixture<TestElementrefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestElementrefComponent]
    });
    fixture = TestBed.createComponent(TestElementrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
