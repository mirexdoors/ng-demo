import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.sass']
})
export class CarsComponent {
  isDisabledAdding: boolean = true;
  carAddingStatus: string = '';
  inputText: string = '';

  constructor() {
    setTimeout(() => {
      this.isDisabledAdding = false;
    }, 1000);
  }

  addCar():void {
    this.carAddingStatus = "Car added!";
  }

  onInput(event: Event) {
    this.inputText = (<HTMLInputElement>event.target).value;
  }

}
