import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dashboard } from '../../models/dashboard/dashboard';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private apiUrl = `${environment.apiUrl}98aa3198-cc84-42de-8875-5871130ad60a`;
  constructor(private http: HttpClient) { }

  getDashboard(): Observable<Dashboard> {
    return this.http.get<Dashboard>(this.apiUrl);
  }

  updateData(): Observable<Dashboard> {
    return this.http.put<Dashboard>(this.apiUrl, null);
  }

}
