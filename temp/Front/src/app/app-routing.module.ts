import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from "./components/sections/index/index.component";
import { NewsComponent } from "./components/sections/news/news.component";
import { AdminComponent } from "./components/sections/admin/admin.component";
import { EditorComponent } from "./components/sections/editor/editor.component";
import { TextsComponent } from "./components/sections/texts/texts.component";
import { EncyclopediaComponent } from "./components/sections/encyclopedia/encyclopedia.component";
import { ProfileComponent } from "./components/sections/profile/profile.component";
import { ProfileUserComponent } from "./components/sections/profile-user/profile-user.component";
import { LoginComponent } from "./components/sections/login/login.component";
import { SigninComponent } from "./components/sections/signin/signin.component";
import { BookComponent } from "./components/sections/book/book.component";

import { UserGuardService } from "./services/guards/user-guard.service";
import { AdminGuardService } from "./services/guards/admin-guard.service";
import { GuestGuardService } from "./services/guards/guest-guard.service";


const routes: Routes = [
  {path: "index", redirectTo: "", pathMatch: 'full' },
  {path: "", component: IndexComponent},
  {path: "admin", component: AdminComponent, canActivate:[AdminGuardService]},
  {path: "news", component: NewsComponent},
  {path: "editor", component: EditorComponent, canActivate:[UserGuardService]},
  {path: "editor/:title", component: EditorComponent, canActivate:[UserGuardService]},
  {path: "texts", component: TextsComponent},
  {path: "encyclopedia", component: EncyclopediaComponent},
  {path: "profile", pathMatch: 'full', component: ProfileComponent, canActivate:[UserGuardService]},
  {path: "profile/:username", component: ProfileUserComponent, canActivate:[UserGuardService]},
  {path: "login", component: LoginComponent, canActivate:[GuestGuardService]},
  {path: "signin", component: SigninComponent, canActivate:[GuestGuardService]},
  {path: "book/:title", component: BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
