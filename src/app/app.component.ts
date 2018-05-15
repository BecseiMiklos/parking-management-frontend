import {Component} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';

  constructor(private http: HttpClient) {
    // let params = new HttpParams();
    // params = params.append('licensePlate', 'AAA000');
    //
    // this.http.get('http://localhost:8080/car/list', {params: params}).toPromise()
    //   .then((response: any[]) => {
    //     console.log(response);
    //   })
    //   .catch(err => {
    //     if (err instanceof HttpErrorResponse) {
    //       console.error(err.error.message);
    //     } else {
    //       console.log(err);
    //     }
    //   });
  }

}
