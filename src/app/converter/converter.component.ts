import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css',
})
export class ConverterComponent {
  @Input() public names: Array<String>;
  @Input() public rates: Array<object>;

  public From: string;
  public To: string;
  public value: number;
}
