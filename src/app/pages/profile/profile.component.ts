import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
public user: User
constructor(){
this.user = new User(25,"omar","Abad","yxomaar@gmail.com","https://imagenes.elpais.com/resizer/jdsQg5-8_fenW_6Np_F_PwpmYeY=/980x980/cloudfront-eu-central-1.images.arcpublishing.com/prisa/UWETC42AM5IZXPRJKZ5DWKK7MY.jpg","keyboard123",)
}
public editar(newname:HTMLInputElement, newSurName:HTMLInputElement, newEmail:HTMLInputElement,newPhoto:HTMLInputElement)
   {
      this.user.name = newname.value;
      this.user.surname = newSurName.value;
      this.user.email = newEmail.value;
      this.user.photo = newPhoto.value
}


}
