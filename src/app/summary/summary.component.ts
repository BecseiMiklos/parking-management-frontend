import {Component, OnInit} from '@angular/core';
import {RestService} from '../rest.service';
import {CarVO} from '../vo/car-vo';
import {ConfirmationService} from 'primeng/api';
import {NgForm} from '@angular/forms';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  providers: [ConfirmationService]
})
export class SummaryComponent implements OnInit {

  allCars: CarVO[] = [];
  selectedCar: CarVO;
  editedCar: CarVO;
  loading = false;
  showCarDetailsDialog = false;

  constructor(private restService: RestService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.getAllCars();
  }

  private getAllCars() {
    this.restService.get('car/list')
      .then(res => {
        console.log(res);
        this.allCars = res.data;
        this.loading = false;
      }).catch(err => {
      this.loading = false;
      console.error(err);
    });
  }

  editCar(): void {
    this.editedCar = JSON.parse(JSON.stringify(this.selectedCar));
    this.showCarDetailsDialog = true;
  }

  saveCar(carForm: NgForm): void {
    if (!carForm.form.valid) {
      const requiredFields = [];
      Object.keys(carForm.controls).forEach(control => {
        const c = carForm.controls[control];
        if (c.errors) {
          if (c.errors.required) {
            requiredFields.push(control);
          }
        }
      });
      let errorMsg;
      if (requiredFields.length !== 0) {
        errorMsg = requiredFields.join(', ') + (requiredFields.length === 1 ? ' is' : ' are') + ' required!';
      } else {
        errorMsg = 'Validation failed!';
      }
      this.messageService.add({severity: 'error', summary: 'Error', detail: errorMsg});
      return;
    }

    this.restService.post('car/save', this.editedCar)
      .then(response => {
        console.log(response);
        this.messageService.add({severity: 'success', summary: 'Car saved successfully'});
        this.showCarDetailsDialog = false;
        this.editedCar = new CarVO();
        this.getAllCars();
      }).catch(err => {
      console.error(err);
    });
  }

  deleteCar(): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this car?',
      accept: () => {
        this.restService.post(`car/delete/${this.selectedCar.id}`, null)
          .then(response => {
            console.log(response);
            this.messageService.add({severity: 'success', summary: 'Car deleted successfully'});
            this.getAllCars();
          }).catch(err => {
          console.error(err);
        });
      }
    });
  }

  onRowSelect(data: any): void {
    console.log(data);
  }

}
