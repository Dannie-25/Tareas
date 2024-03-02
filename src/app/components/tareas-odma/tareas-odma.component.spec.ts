import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasOdmaComponent } from './tareas-odma.component';

describe('TareasOdmaComponent', () => {
  let component: TareasOdmaComponent;
  let fixture: ComponentFixture<TareasOdmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasOdmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasOdmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
