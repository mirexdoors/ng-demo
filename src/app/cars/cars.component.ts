import {Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.sass']
})
export class CarsComponent {
  isDisabledAdding: boolean = true;
  carName: string = '';
  carYear: number = 2017;
  isCarAdded: boolean = false;
  cars: Array<{name: string, year: number}> = [
    {
      name: 'Ford',
      year: 2011,
    },
    {
      name: 'Audi',
      year: 2021,
    },
    {
      name: 'BMW',
      year: 1998,
    }];

  constructor() {
    setTimeout(() => {
      this.isDisabledAdding = false;
    }, 1000);
  }

  addCar(): void {
    this.cars.push(
      {
        name: this.carName,
        year: this.carYear
      }
    );
    this.isCarAdded = true;
    this.carName = '';
    this.carYear = 2017;
  }
}
