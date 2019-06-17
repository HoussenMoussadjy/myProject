import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIdentityComponent } from './list-identity.component';

describe('ListIdentityComponent', () => {
  let component: ListIdentityComponent;
  let fixture: ComponentFixture<ListIdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIdentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
