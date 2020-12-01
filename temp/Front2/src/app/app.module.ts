import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AdminComponent } from 'src/app/components/sections/admin/admin-base/admin.component'
import { AdminNewsComponent } from 'src/app/components/sections/admin/admin-news/admin-news.component'
import { AdminNewcomersComponent } from 'src/app/components/sections/admin/admin-newcomers/admin-newcomers.component';
import { AdminStatsComponent } from 'src/app/components/sections/admin/admin-stats/admin-stats.component';
import { AdminDatabaseUsersComponent } from 'src/app/components/sections/admin/admin-database/admin-database-users/admin-database-users.component';
import { AdminDatabaseTextsComponent } from 'src/app/components/sections/admin/admin-database/admin-database-texts/admin-database-texts.component';
import { AdminDatabaseCharactersComponent } from 'src/app/components/sections/admin/admin-database/admin-database-characters/admin-database-characters.component';
import { AdminDatabaseComponent } from 'src/app/components/sections/admin/admin-database/Admin-database-base/admin-database.component';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/global/header/header.component';
import { NabvarComponent } from './components/global/nabvar/nabvar.component';


import { IndexComponent } from './components/sections/index/index.component';

import { NewsComponent } from './components/sections/news/news.component';

import { EditorComponent } from './components/sections/editor/editor.component';

import { TextsComponent } from './components/sections/texts/texts-base/texts.component';
import { TextsListComponent } from './components/sections/texts/texts-list/texts-list.component';
import { TextsListItemComponent } from './components/sections/texts/texts-list/texts-list-item/texts-list-item.component';
import { TextsReaderComponent } from './components/sections/texts/texts-reader/texts-reader.component';

import { EncyclopediaComponent } from './components/sections/encyclopedia/encyclopedia.component';

import { ProfileComponent } from './components/sections/profile/profile/profile.component';
import { ProfileUserComponent } from './components/sections/profile/profile-user/profile-user.component';
import { ProfileListComponent } from './components/sections/profile/profile-list/profile-list.component'

import { LoginComponent } from './components/sections/login/login.component';
import { SigninComponent } from './components/sections/signin/signin.component';

import { AccordionItemComponent } from './components/elements/accordion/accordion-item/accordion-item.component';

import { AccordionComponent } from './components/elements/accordion/accordion.component';
import { AlertComponent } from './components/elements/alert/alert.component';

import { LoginService } from './services/login/login.service';

@NgModule({
	declarations: [
		AppComponent,
		NabvarComponent,
		HeaderComponent,
		
		IndexComponent,

		AdminComponent,
		AdminDatabaseComponent,
		AdminNewcomersComponent,
		AdminNewsComponent,
		AdminStatsComponent,
		AdminDatabaseTextsComponent,
		AdminDatabaseUsersComponent,
		AdminDatabaseCharactersComponent,

		NewsComponent,

		EditorComponent,
		
		TextsComponent,
		TextsReaderComponent,
		TextsListComponent,
		TextsListItemComponent,
		
		EncyclopediaComponent,
		
		ProfileComponent,
		ProfileListComponent,
		ProfileUserComponent,
		
		LoginComponent,
		SigninComponent,
		
		AccordionComponent,
		AccordionItemComponent,
		AlertComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		ReactiveFormsModule
	],
	providers: [LoginService],
	bootstrap: [AppComponent]
})
export class AppModule { }
