import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../../services/http/http.service'

@Component({
	selector: 'app-texts-reader',
	templateUrl: './texts-reader.component.html',
	styleUrls: ['./texts-reader.component.sass']
})
export class TextsReaderComponent implements OnInit {

	book: any;

	constructor(
		private router: ActivatedRoute,
		private http : HttpService
	) { }

	ngOnInit(): void {
		this.router.params.subscribe(
			(params) => {
				this.http.get("http://127.0.0.1:3000/text/" + params.id, (data:any)=>{
					this.book = data;
				});
			}
		);
	}

}
