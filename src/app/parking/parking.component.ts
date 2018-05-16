import {Component, OnInit} from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss']
})
export class ParkingComponent implements OnInit {

  parkingCars: any[] = [];
  loading = false;

  constructor(private restService: RestService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.restService.get('parking/findAllInProgress')
      .then(res => {
        console.log(res);
        this.parkingCars = res.data;
        this.loading = false;
      })
      .catch(err => {
        this.loading = false;
        console.error(err);
      });
  }

}
