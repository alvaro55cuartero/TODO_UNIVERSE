import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/global/header/header.component';
import { NavbarComponent } from './components/global/navbar/navbar.component';
import { FooterComponent } from './components/global/footer/footer.component';
import { LoginComponent } from './components/sections/login/login.component';
import { IndexComponent } from './components/sections/index/index.component';
import { AdminComponent } from './components/sections/admin/admin.component';
import { NewsComponent } from './components/sections/news/news.component';
import { EditorComponent } from './components/sections/editor/editor.component';
import { EditorMainComponent } from './components/sections/editor/editor-main/editor-main.component';
import { EditorSideComponent } from './components/sections/editor/editor-side/editor-side.component';

import { TextsComponent } from './components/sections/texts/texts.component';
import { EncyclopediaComponent } from './components/sections/encyclopedia/encyclopedia.component';
import { ProfileComponent } from './components/sections/profile/profile.component';
import { ProfileUserComponent } from './components/sections/profile-user/profile-user.component';
import { BookComponent } from './components/sections/book/book.component';
import { SigninComponent } from './components/sections/signin/signin.component';
import { AlertComponent } from './components/global/alert/alert.component';
import { AlertsComponent } from './services/alerts/alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    IndexComponent,
    AdminComponent,
    NewsComponent,
    EditorComponent,
    TextsComponent,
    EncyclopediaComponent,
    ProfileComponent,
    ProfileUserComponent,
    BookComponent,
    SigninComponent,
    AlertComponent,
    AlertsComponent,
    EditorMainComponent,
    EditorSideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
