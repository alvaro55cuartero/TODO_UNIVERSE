import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
	selector: 'app-scheme-base',
	templateUrl: './scheme-base.component.html',
	styleUrls: ['./scheme-base.component.sass']
})
export class SchemeBaseComponent implements OnInit {

	book;
	textForm; 

	constructor(
		private formBuilder: FormBuilder
	) { }

	ngOnInit(): void {
		this.textForm = this.formBuilder.group({
			title: ['', Validators.required],
			text: ['', Validators.required]
		});
	}

}
