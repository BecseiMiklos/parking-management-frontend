import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CarVO} from '../vo/car-vo';
import {isNullOrUndefined} from 'util';
import {MessageService} from 'primeng/components/common/messageservice';
import {ParkingVO} from '../vo/parking-vo';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private cars: CarVO[] = [];
  filteredCars: CarVO[] = [];
  selectedCar: CarVO;

  constructor(private http: HttpClient,
              private messageService: MessageService,
              private restService: RestService) {
  }

  ngOnInit(): void {
    this.restService.get('car/list')
      .then(res => {
        console.log(res);
        this.cars = res.data;
      })
      .catch(err => console.error(err));
  }

  enterCar(): void {
    console.log(this.selectedCar);
    if (isNullOrUndefined(this.selectedCar)) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'No car selected to enter'});
      return;
    }

    const parkingVO = new ParkingVO();
    parkingVO.car = this.selectedCar;

    this.restService.post('parking/enter', parkingVO)
      .then(response => {
        console.log(response);
        this.messageService.add({severity: 'success', summary: 'Car parked successfully'});
        this.selectedCar = null;
      }).catch(err => {
      this.selectedCar = null;
      console.error(err);
    });

  }

  exitCar(): void {
    console.log(this.selectedCar);
    if (isNullOrUndefined(this.selectedCar)) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'No car selected to exit'});
      return;
    }

    this.restService.post('parking/exit/' + this.selectedCar.licensePlateNumber, null)
      .then(response => {
        console.log(response);
        this.messageService.add({severity: 'success', summary: 'Car parking ended successfully', detail: 'Parking cost is ' + response.data[0].paidCost + '.- HUF'});
        this.selectedCar = null;
      }).catch(err => {
      this.selectedCar = null;
      console.log(err);
    });
  }

  search(event: any): void {
    console.log(event.query);
    this.filteredCars = this.cars.filter(car => car.licensePlateNumber.indexOf(event.query.toUpperCase()) !== -1);
  }

}
