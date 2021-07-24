import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../_models/Book';
import { BookService } from '../_services/book.service';

@Injectable()
export class BookResolver implements Resolve<any> {
  constructor(private bookService: BookService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const { bookId } = route.params;
    if(!bookId) {
      return null;
    }
    return this.bookService.getBook(bookId);
  }
}
