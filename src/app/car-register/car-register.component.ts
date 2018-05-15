import {Component} from '@angular/core';
import {CarVO} from '../vo/car-vo';
import {Message} from 'primeng/api';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MessageService} from 'primeng/components/common/messageservice';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-car-register',
  templateUrl: './car-register.component.html',
  styleUrls: ['./car-register.component.scss']
})
export class CarRegisterComponent {

  msgs: Message[] = [];
  carVO: CarVO;

  constructor(private http: HttpClient,
              private messageService: MessageService,
              private restService: RestService) {
    console.log('CarRegisterComponent constructor');
    this.carVO = new CarVO();
  }

  saveNewCar(carForm: NgForm): void {
    this.msgs = [];
    console.log(this.carVO);
    console.log(carForm.form.valid);

    if (!carForm.form.valid) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Validation failed'});
      return;
    }

    this.restService.post('car/save', this.carVO)
      .then(response => {
        console.log(response);
        this.messageService.add({severity: 'success', summary: 'Car saved successfully'});
        carForm.resetForm();
      }).catch(err => {
      console.error(err);
    });
  }

}
