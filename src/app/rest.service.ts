import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResponseVO} from './vo/response-vo';
import {MessageService} from 'primeng/components/common/messageservice';

@Injectable()
export class RestService {

  private static readonly BASE_URL = 'http://localhost:8080/';

  constructor(private http: HttpClient,
              private msgService: MessageService) {
  }

  public get(url: string): Promise<ResponseVO> {
    return new Promise<ResponseVO>((resolve, reject) => {
      this.http.get<ResponseVO>(RestService.BASE_URL + url)
        .toPromise().then(res => {
        if (!res.success) {
          throw new Error(res.errorMessage);
        }
        resolve(res);
      }).catch(err => {
        this.msgService.add({severity: 'error', summary: 'Error', detail: err.message});
        reject(err);
      });
    });
  }

  public post(url: string, body: any): Promise<ResponseVO> {
    return new Promise<ResponseVO>((resolve, reject) => {
      this.http.post<ResponseVO>(RestService.BASE_URL + url, body)
        .toPromise().then(res => {
        if (!res.success) {
          throw new Error(res.errorMessage);
        }
        resolve(res);
      }).catch(err => {
        this.msgService.add({severity: 'error', summary: 'Error', detail: err.message});
        reject(err);
      });
    });
  }

}
