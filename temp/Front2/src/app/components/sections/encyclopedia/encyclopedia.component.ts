import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpService } from "../../../services/http/http.service";

@Component({
	selector: 'app-encyclopedia',
	templateUrl: './encyclopedia.component.html',
	styleUrls: ['./encyclopedia.component.sass']
})
export class EncyclopediaComponent implements OnInit {

	searchForm;
	results;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
	) {
		this.searchForm = this.formBuilder.group({
			search:['', Validators.required]
		});
	}

	ngOnInit(): void {
	}

	onSubmit() {
		const user = this.searchForm.value;
		//this.http.search(user.search).subscribe((data: any) => {
		//  this.results = data;
		//});
	}

	onItemClick(result) {
		this.router.navigate([`/book/${result.title}`]);
	}

}
