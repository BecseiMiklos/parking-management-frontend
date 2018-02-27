import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:8080/car/list').toPromise()
      .then((response: any[]) => {
        console.log(response);
      });
  }

}
