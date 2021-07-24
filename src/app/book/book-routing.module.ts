import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookResolver } from './_resolvers/book.resolver';
import { BooksListResolver } from './_resolvers/books-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent,
    resolve: {
      books: BooksListResolver,
    },
  },
  {
    path: ':bookId',
    component: BookDetailsComponent,
    resolve: {
      book: BookResolver,
    },
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
