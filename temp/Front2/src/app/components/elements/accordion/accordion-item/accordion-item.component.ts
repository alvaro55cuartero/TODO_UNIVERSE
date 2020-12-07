import { Component, Input, Output, EventEmitter, ɵConsole  } from '@angular/core';

@Component({
	selector: 'app-accordion-item',
	templateUrl: './accordion-item.component.html',
	styleUrls: ['./accordion-item.component.sass']
})
export class AccordionItemComponent {
	@Input() opened = false;
	@Input() title: string;

	toggle() {
		this.opened = !this.opened;
	}
}
