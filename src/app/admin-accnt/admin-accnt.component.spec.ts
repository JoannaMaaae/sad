import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccntComponent } from './admin-accnt.component';

describe('AdminAccntComponent', () => {
  let component: AdminAccntComponent;
  let fixture: ComponentFixture<AdminAccntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAccntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
