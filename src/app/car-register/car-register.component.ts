import {Component, OnInit} from '@angular/core';
import {CarVO} from '../vo/car-vo';
import {Message} from 'primeng/api';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-car-register',
  templateUrl: './car-register.component.html',
  styleUrls: ['./car-register.component.scss']
})
export class CarRegisterComponent implements OnInit {

  msgs: Message[] = [];
  carVO: CarVO;

  constructor() {
    this.carVO = new CarVO();
  }

  ngOnInit() {
  }

  saveNewCar(carForm: NgForm): void {
    this.msgs = [];
    console.log(this.carVO);
    console.log(carForm.form.valid);
    if (!carForm.form.valid) {
      this.msgs = [];
      this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
    }
  }

}
