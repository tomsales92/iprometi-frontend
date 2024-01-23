import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dashboard } from '../../models/dashboard/dashboard';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private apiUrl = `${environment.apiUrl}d7c9231e-7295-4b84-9ec8-8b512e3e154d`;
  //private apiUrl = `${environment.apiUrl}af8de950-e3f4-4ef8-8395-964ab18379b1`;
  constructor(private http: HttpClient) { }

  getDashboard(): Observable<Dashboard> {
    return this.http.get<Dashboard>(this.apiUrl);
  }

  updateData(): Observable<Dashboard> {
    return this.http.put<Dashboard>(this.apiUrl, null);
  }

}
