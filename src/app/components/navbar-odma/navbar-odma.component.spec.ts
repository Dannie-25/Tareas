import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOdmaComponent } from './navbar-odma.component';

describe('NavbarOdmaComponent', () => {
  let component: NavbarOdmaComponent;
  let fixture: ComponentFixture<NavbarOdmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarOdmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarOdmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
