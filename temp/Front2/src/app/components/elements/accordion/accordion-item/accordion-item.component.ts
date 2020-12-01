import { Component, Input, Output, EventEmitter, ɵConsole  } from '@angular/core';

@Component({
	selector: 'app-accordion-item',
	templateUrl: './accordion-item.component.html',
	styleUrls: ['./accordion-item.component.sass']
})
export class AccordionItemComponent {
	@Input() opened = false;
	@Input() title: string;
	//@Output() toggle: EventEmitter<any> = new EventEmitter<any>();

	toggle() {
		console.log("vuttone");
		this.opened = !this.opened;
	}
}
