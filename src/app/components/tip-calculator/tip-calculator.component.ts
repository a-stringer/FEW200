import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.scss']
})
export class TipCalculatorComponent implements OnInit {
  tipPercent = .10;
  totalAmount = 0;

  setTip(newValue) {
    this.tipPercent = newValue;
  }
  total(what: HTMLInputElement) {
    this.totalAmount = parseFloat(what.value);
  }

  constructor() { }
  ngOnInit() {
  }
}
