import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Modal } from '../../components/elements/modal/modal.model' 

@Injectable({
	providedIn: 'root'
})
export class ModalService {
	private subject = new Subject<Modal>();


	constructor() { }

	onModal(): Observable<Modal>  {
		return this.subject.asObservable();
	}

	show(message: Array<String>, type,  callback) {
		this.subject.next(new Modal({ message, type,  callback }));
	}
}
