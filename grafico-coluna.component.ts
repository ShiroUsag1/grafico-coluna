import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GraficoModel } from '../../models/graficoModel';

@Component({
  selector: 'app-grafico-coluna',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grafico-coluna.component.html',
  styleUrl: './grafico-coluna.component.scss',
})
export class GraficoColunaComponent {
  @Input() chartData: GraficoModel[];
  maxValue: number;
  gridLines: { y: number; label: string }[] = [];

  ngOnInit(): void {
    this.maxValue = Math.max(...this.chartData.map((d) => d.value));
    this.generateGridLines();
  }

  generateGridLines(): void {
    const numberOfLines = 10; // Criando 10 divisões de 10% cada
    const step = 10; // Step de 10% para cada linha de grade
    this.gridLines = [];

    // Gera as linhas de grade de 10 em 10%
    for (let i = 0; i <= numberOfLines; i++) {
      const percentage = i * step;
      const yValue = 100 - percentage; // Calcula a posição Y baseada em 100%
      this.gridLines.push({ y: yValue, label: `${percentage}` });
    }
  }
}
