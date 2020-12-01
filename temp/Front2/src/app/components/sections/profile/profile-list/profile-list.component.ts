import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { HttpService } from "../../../../services/http/http.service";

@Component({
	selector: 'app-profile-list',
	templateUrl: './profile-list.component.html',
	styleUrls: ['./profile-list.component.sass']
})
export class ProfileListComponent implements OnInit {

	@Input() index;
	@Input() texts;
	@Input() text;

	menuVisible = false;

	constructor(
		private router:Router,
		private httpService: HttpService
	) { }

	ngOnInit(): void {
		console.log(this.text);

	}

	onTextEditClick(id) {
		this.router.navigate([`/editor/${this.text.title}`]);
	}

	onTextDeleteClick(id) {
		//this.httpService.deleteText(id).subscribe((data) => {
		//	this.texts.splice(this.index, 1);
		//});
	}

	toggleMenu() {
		this.menuVisible = !this.menuVisible;
	}

	onTextReadClick(text) {
		this.router.navigate([`/book/${text.title}`]);
	}
}
