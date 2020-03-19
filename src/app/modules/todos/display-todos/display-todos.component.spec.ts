import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTodosComponent } from './display-todos.component';

describe('DisplayTodosComponent', () => {
  let component: DisplayTodosComponent;
  let fixture: ComponentFixture<DisplayTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
