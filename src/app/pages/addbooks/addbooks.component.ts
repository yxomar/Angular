import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent {
public book:void
constructor(private servibook:BooksService){}

public createbook(photo,title,author,type,price,id_book,id_user){
  let newbook = new Book(id_book,id_user,title,type,author,price,photo)
  this.book = this.servibook.add(newbook)
  alert("Su libro se ha creado correctamente")
}

}
