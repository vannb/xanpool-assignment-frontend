import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class BookService {
  constructor(
    private http: HttpClient) { }


  listBooks(query: any) {
    let url = `${environment.apiUrl}/book?`;
    if (query && query.length) {
      url += `&query=${query}`;
    }

    return this.http.get<any>(url).pipe(
      map(res => res)
    );
  }

  getBook(id: number) {
    return this.http.get<any>(`${environment.apiUrl}/book/${id}`).pipe(
      map(res => res)
    );
  }

}
