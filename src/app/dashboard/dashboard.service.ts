import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly baseUrl = "https://mybootcamp-dio-santander.herokuapp.com/bootcamp";
  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]> {
    const url = "stock";
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }
}
