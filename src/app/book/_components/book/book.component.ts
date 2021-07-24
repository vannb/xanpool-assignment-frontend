import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../_models/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})

export class BookComponent implements OnInit {
  @Input() book!: Book;
  constructor(
  ) { }

  ngOnInit() {
  }
}
