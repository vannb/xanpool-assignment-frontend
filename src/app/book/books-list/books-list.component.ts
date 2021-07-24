import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../_models/Book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})

export class BooksListComponent implements OnInit {

  public books: Array<Book> = [];
  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
  ) {
    this.titleService.setTitle('Xanpool Assignment');
  }

  ngOnInit() {
    const routeData = this.route.snapshot.data;
    this.books = routeData.books || [];
  }
}
