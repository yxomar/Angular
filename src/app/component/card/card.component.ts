import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksComponent } from 'src/app/pages/books/books.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() libro: Book;
@Input() even: boolean;
@Output() bookDel = new EventEmitter<Book>();

constructor(){}

 deletebook(){
  this.bookDel.emit(this.libro);
  console.log(this.libro);
  
  
}
}
