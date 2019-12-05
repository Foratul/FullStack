import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlanetasComponent } from './lista-planetas.component';

describe('ListaPlanetasComponent', () => {
  let component: ListaPlanetasComponent;
  let fixture: ComponentFixture<ListaPlanetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPlanetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlanetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
