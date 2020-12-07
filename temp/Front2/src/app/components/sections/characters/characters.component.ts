import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
	selector: 'app-characters',
	templateUrl: './characters.component.html',
	styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

	characters;

	constructor(
		private http: HttpService
	) { }

	ngOnInit(): void {
		this.http.getCharacters((data) => {
			this.characters = data;
		});
	}

}
