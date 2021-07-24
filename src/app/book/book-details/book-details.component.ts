import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../_models/Book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})

export class BookDetailsComponent implements OnInit {
  public book!: Book;
  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
  ) { }

  ngOnInit() {
    const routeData = this.route.snapshot.data;
    this.book = routeData.book;
    this.titleService.setTitle(this.book.title);
  }
}
