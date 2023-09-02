import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { CardComponent } from './component/card/card.component';


const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path:"header",component:HeaderComponent},
  {path: "footer", component: FooterComponent},
  {path: "form-register", component: FormRegisterComponent},
  {path: "register", component: FormRegisterComponent},
  {path: "profile", component: ProfileComponent},
  {path: "Books", component:BooksComponent},
  {path: "card", component:CardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
