import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
// import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
public books: Book[]
constructor(){
//  this.books = servibook.getAll()
    this.books=  [
    new Book(1,1, "El exorcista", "Blanda", "William Peter Blatty", 20,"https://ciervoblanco.club/wp-content/uploads/2017/09/exorcista-william-peter-blatty-club-libro-madrid-tertulia-literaria-ciervo-blanco.jpg" ),
    new Book(2,2, "Dune", "Blanda", "Frank Herbert", 13, "https://m.media-amazon.com/images/I/A1u+2fY5yTL._AC_UF1000,1000_QL80_.jpg"),
    new Book(3,3, "Los juegos del hambre", "Dura", "Suzanne Collins", 30, "https://www.greenlibros.com/cdn/shop/products/acb28f0a-d858-45d9-b33e-856a1b1861b8-9789876094436_grande.jpg?v=1663162476"),
    new Book(4,4, "El padrino", "Blanda", "Mario Puzo", 12, "https://pictures.abebooks.com/isbn/9788466602310-es.jpg"),
    new Book(5,5, "1984", "Dura", "George Orwell", 27, "https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/6254291caac6d1e42e8986df_62023ceb41cd1c2807b2841a_9788418933011.jpeg"),
    new Book(6,6, "El hobbit", "Dura", "J.R.R. Tolkien", 77, "https://i.ebayimg.com/images/g/HW4AAOSwYDZgjoaO/s-l640.jpg")
    ]

    console.log(this.books);
    

}
// buscarbook(id_book:number){
//   if(this.servibook.getOne(id_book)){
// this.books = [this.servibook.getOne(id_book)]
//   }
//   else{
//     this.servibook.getAll()
//   }
//   if(!id_book){
//     alert("Libro no encontrado")
//   }
// }

delete(book:Book){
  let bookFind = this.books.filter(b => b.id_book != book.id_book);
  console.log("este es el libro" + bookFind);
  this.books= bookFind;
  
  console.log(this.books);

}
}