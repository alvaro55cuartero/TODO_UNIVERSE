import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-editor-side',
	templateUrl: './editor-side.component.html',
	styleUrls: ['./editor-side.component.sass']
})
export class EditorSideComponent implements OnInit {

	@Input() book;
	open = false;
	cross = "&equiv;";

	constructor() { }

	ngOnInit(): void {
	}

	onTabClick() {
		this.open = !this.open;
		if ( this.open ) {
			this.cross = "&times;";
		} else {
			this.cross = "&equiv;";
		}
	}

}
