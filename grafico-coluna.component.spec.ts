import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoColunaComponent } from './grafico-coluna.component';

describe('GraficoColunaComponent', () => {
  let component: GraficoColunaComponent;
  let fixture: ComponentFixture<GraficoColunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoColunaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficoColunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
