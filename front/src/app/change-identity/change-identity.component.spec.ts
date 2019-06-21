import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeIdentityComponent } from './change-identity.component';

describe('ChangeIdentityComponent', () => {
  let component: ChangeIdentityComponent;
  let fixture: ComponentFixture<ChangeIdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeIdentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
