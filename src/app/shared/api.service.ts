import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string =  "https://restcountries.eu/rest/v2";

  constructor(private http : HttpClient) {}

  getAllCountry(){
    return this.http.get(`${this.baseUrl}/all`)
  }
}
