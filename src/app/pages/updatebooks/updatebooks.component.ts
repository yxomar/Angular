import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-updatebooks',
  templateUrl: './updatebooks.component.html',
  styleUrls: ['./updatebooks.component.css']
})
export class UpdatebooksComponent {
constructor(public servibook:BooksService){}

editbook(photo,title,author,type,price,id_book,id_user){
  let bookedit = new Book(id_book,id_user,title,type,author,price,photo) 
  this.servibook.edit(bookedit)
  if(bookedit.id_book){
    alert("Su libro se ha actualizado coreectamente")
  }
  else{
    alert("Su libro no ha sido encontrado")
  }
}
}
