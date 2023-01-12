import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http:HttpClient) { }

  get(){
    const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
    return this.http.get(url);
  }


}
