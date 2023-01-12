import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http: HttpClient) { }

  get() {

    // const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
    const url = 'https://api.nasa.gov/planetary/apod';

    const params = new HttpParams()
      .set('api_key', 'DEMO_KEY');

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true');

    return this.http.get(url, { params: params, headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  // fake post - not acutally to nasa server...
  // if real --> post(dataToBeSend)
  post(data:any) {

    // const data = {
    //   "name": "morpheus",
    //   "job": "leader"
    // };

    const fakeUrl = 'https://reqres.in/api/users';

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('crossDomain', 'true');

    return this.http.post(fakeUrl, JSON.stringify(data),  { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );


  }

}
