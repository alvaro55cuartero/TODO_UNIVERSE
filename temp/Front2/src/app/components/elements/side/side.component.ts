import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-side',
	templateUrl: './side.component.html',
	styleUrls: ['./side.component.sass']
})
export class SideComponent implements OnInit {
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
