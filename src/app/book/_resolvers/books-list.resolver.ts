import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { BookService } from '../_services/book.service';

@Injectable()
export class BooksListResolver implements Resolve<any> {
  constructor(private bookService: BookService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const query = route.queryParams;
    console.log(query)
      return this.bookService.listBooks(query);
  }
}
