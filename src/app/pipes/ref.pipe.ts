import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book';

@Pipe({
  name: 'ref'
})
export class RefPipe implements PipeTransform {

  transform(codigo: Book): string {
    return `Ref-${codigo.id_book}`;
  }

}
