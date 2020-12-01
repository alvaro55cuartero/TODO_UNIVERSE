import { Component, ContentChildren, AfterContentInit  } from '@angular/core';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.sass']
})
export class AccordionComponent implements AfterContentInit  {
  //@ContentChildren(AccordionItemComponent) panels: QueryList<AccordionItemComponent>;

  constructor() { }

  ngAfterContentInit() {

  }
}
