import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dashboard } from '../../models/dashboard/dashboard';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private apiUrl = 'https://iprometi-backend.vercel.app/data';
  constructor(private http: HttpClient) { }

  getDashboard(): Observable<Dashboard> {
    return this.http.get<Dashboard>(this.apiUrl);
  }

  updateData(diasRealizados: number): Observable<Dashboard> {
    const body = { diasRealizados };
    return this.http.patch<Dashboard>(this.apiUrl, body);
  }

}
