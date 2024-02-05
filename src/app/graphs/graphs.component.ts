import {
  Component,
  Output,
  Input,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrl: './graphs.component.css',
})
export class GraphsComponent implements OnChanges {
  @Input() public names: Array<string>;
  @Input() public rates: Array<number> = [];
  @Input() public dates: Array<Date>;

  @Output() public getRates = new EventEmitter<{ index: number }>();

  dataPoints: any[] = [];
  chart: any;

  valueChanged(e) {
    this.getRates.emit(e);
    this.addData();
  }

  chartOptions = {
    theme: 'dark1',
    zoomEnabled: true,
    exportEnabled: true,
    data: [
      {
        type: 'line',
        dataPoints: this.dataPoints,
      },
    ],
    axisX: {
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
      },
    },
    axisY: {
      crosshair: {
        enabled: true,
      },
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: 'pointer',
      verticalAlign: 'bottom',
      horizontalAlign: 'right',
      dockInsidePlotArea: true,
    },
  };

  getChartInstance(chart: object) {
    this.chart = chart;
  }

  addData = () => {
    this.chartOptions.data[0].dataPoints.length = 0;
    for (let i = 0; i < 12; i++) {
      this.chartOptions.data[0].dataPoints.push({
        x: this.dates[i],
        y: this.rates[i],
      });
    }
    this.chart.render();
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['rates']['firstChange']) {
      this.addData();
    }
  }
}
