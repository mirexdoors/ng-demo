import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.sass']
})
export class CarComponent {
  @Input('carItem') car: { name: string; year: number; }

  constructor() {
    this.car = {name: '', year: 0,}
  };
}
