import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../models/Model';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'https://freeapi.gerasim.in/api/BigBasket/';
  constructor(private http: HttpClient) {}
  getAllProduct(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(`${this.apiUrl}GetAllProducts`);
  }
}
