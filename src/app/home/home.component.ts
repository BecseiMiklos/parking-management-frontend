import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {CarVO} from '../vo/car-vo';
import {isNullOrUndefined} from 'util';
import {MessageService} from 'primeng/components/common/messageservice';
import {ParkingVO} from '../vo/parking-vo';

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
              private messageService: MessageService) {
  }

  ngOnInit() {
    // let params = new HttpParams();
    // params = params.append('licensePlate', 'BBB111');

    this.http.get('http://localhost:8080/car/list')
      .toPromise().then((response: any[]) => {
      console.log(response);
      this.cars = response;
    })
      .catch(err => {
        if (err instanceof HttpErrorResponse) {
          console.error(err.error.message);
        } else {
          console.log(err);
        }
      });
  }

  enterCar(): void {
    console.log(this.selectedCar);
    if (isNullOrUndefined(this.selectedCar)) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'No car selected to enter'});
      return;
    }
    const parkingVO = new ParkingVO();
    parkingVO.car = this.selectedCar;

    this.http.post('http://localhost:8080/parking/enter', parkingVO)
      .toPromise().then(response => {
      console.log(response);
      this.messageService.add({severity: 'success', summary: 'Car parked successfully'});
      this.selectedCar = null;
    }).catch(err => {
      console.log(err);
    });

  }

  exitCar(): void {
    console.log(this.selectedCar);
    if (isNullOrUndefined(this.selectedCar)) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'No car selected to exit'});
      return;
    }

    this.http.post('http://localhost:8080/parking/exit/' + this.selectedCar.licensePlateNumber, null)
      .toPromise().then(response => {
      console.log(response);
      this.messageService.add({severity: 'success', summary: 'Car parked successfully'});
      this.selectedCar = null;
    }).catch(err => {
      console.log(err);
    });
    this.selectedCar = null;
  }

  search(event: any): void {
    console.log(event.query);
    this.filteredCars = this.cars.filter(car => car.licensePlateNumber.indexOf(event.query.toUpperCase()) !== -1);
  }

}
