import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BooksListResolver } from './_resolvers/books-list.resolver';
import { BookResolver } from './_resolvers/book.resolver';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './_components/book/book.component';


@NgModule({
  declarations: [
    BookComponent,
    BookDetailsComponent,
    BooksListComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  providers: [
    BooksListResolver,
    BookResolver,
  ]
})
export class BookModule { }
