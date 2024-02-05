import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrl: './row.component.css',
})
export class RowComponent implements OnInit {
  @Input() public row: object;
  public change: number = 0;
  ngOnInit(): void {
    this.change = Number(
      (
        ((this.row['rate'][0] - this.row['rate'][1]) / this.row['rate'][0]) *
        100
      ).toFixed(5)
    );
  }
}
