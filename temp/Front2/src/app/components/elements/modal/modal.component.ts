import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

import { Modal, ModalType } from './modal.model';


@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

	modal: Modal;

	constructor(
		private modalService: ModalService	
	) {}

	ngOnInit(): void {
		this.modalService.onModal().subscribe( modal => {
			this.modal = modal;
		})
	}

	isTypeQuestion(type) {
		return type == ModalType.question;
	}
	
	isTypeInfo(type) {
		return type == ModalType.info;
	}

	onAccepted() {
		this.modal.callback();
		this.modal = null;
	}

	onRejected() {
		this.modal = null;
	}

}
