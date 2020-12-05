import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {IndexComponent} from 'src/app/components/sections/index/index.component'

import { AdminComponent } from 'src/app/components/sections/admin/admin-base/admin.component'
import { AdminNewsComponent } from 'src/app/components/sections/admin/admin-news/admin-news.component'
import { AdminNewcomersComponent } from 'src/app/components/sections/admin/admin-newcomers/admin-newcomers.component';
import { AdminStatsComponent } from 'src/app/components/sections/admin/admin-stats/admin-stats.component';
import { AdminDatabaseUsersComponent } from 'src/app/components/sections/admin/admin-database/admin-database-users/admin-database-users.component';
import { AdminDatabaseTextsComponent } from 'src/app/components/sections/admin/admin-database/admin-database-texts/admin-database-texts.component';
import { AdminDatabaseCharactersComponent } from 'src/app/components/sections/admin/admin-database/admin-database-characters/admin-database-characters.component';
import { AdminDatabaseComponent } from 'src/app/components/sections/admin/admin-database/Admin-database-base/admin-database.component';

import {NewsComponent} from 'src/app/components/sections/news/news.component'
import {EditorComponent} from 'src/app/components/sections/editor/editor-base/editor.component'
import {EncyclopediaComponent} from 'src/app/components/sections/encyclopedia/encyclopedia.component'
import {TextsListComponent} from 'src/app/components/sections/texts/texts-list/texts-list.component'
import {TextsReaderComponent } from 'src/app/components/sections/texts/texts-reader/texts-reader.component'
import {ProfileComponent} from 'src/app/components/sections/profile/profile/profile.component'
import {ProfileUserComponent} from 'src/app/components/sections/profile/profile-user/profile-user.component'

import {LoginComponent} from 'src/app/components/sections/login/login.component'
import {SigninComponent} from 'src/app/components/sections/signin/signin.component'


const routes: Routes = [
	{ path: "index", redirectTo: "", pathMatch: 'full' },
	{ path: "", component: IndexComponent},

	{ path:"admin", component: AdminComponent, children: [
		{ path:"news", component: AdminNewsComponent},
		{ path:"newcomers", component: AdminNewcomersComponent},
		{ path:"stats", component:AdminStatsComponent},
		{path:"database", component:AdminDatabaseComponent, children:[
			{path:"users", component:AdminDatabaseUsersComponent},
			{path:"texts", component:AdminDatabaseTextsComponent},
			{path:"characters", component:AdminDatabaseCharactersComponent}
		]},
	]},

	{ path: "news", component: NewsComponent},
	{ path: "editor", component: EditorComponent},
	{ path: "encyclopedia", component: EncyclopediaComponent},

	{ path: "texts", component: TextsListComponent},
	{ path: "texts/:id", component: TextsReaderComponent},
	
	{ path: "profile", component: ProfileComponent},
	{ path: "profile/:id", component: ProfileUserComponent},

	{ path: "login", component: LoginComponent},
	{ path: "signin", component: SigninComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy'})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
