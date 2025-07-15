import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente9 } from './componente9';

describe('Componente9', () => {
  let component: Componente9;
  let fixture: ComponentFixture<Componente9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente9);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
