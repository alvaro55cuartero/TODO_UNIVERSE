import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService } from "../../../../services/http/http.service";
import { ModalService } from '../../../../services/modal/modal.service'

import { Modal, ModalType } from '../../../elements/modal/modal.model' 

@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.sass']
})
export class EditorComponent implements OnInit {

	book = {
		title:"",
		text:"",
		author:""   ,
		status:"wip",
		synopsis:"Falta synopsis"
	};
	update;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private http: HttpService,
		private modal: ModalService
	) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe(params =>{
			let title = params.get("title");
			if ( title != null) {
				this.http.get(`http://127.0.0.1/texts/${title}`,data => {
					//this.book._id = data._id;
					this.book.title = data.title;
					this.book.text = data.text;
					this.book.status = "wip";
					this.book.synopsis = data.synopsis;
					this.update = true;
				});
			}
		});
	}

	onUploadClick() {
		console.log(this.book);

		let error = [];

		if (!this.book.title) {
			error.push("- Debes elegir primero un titulo apropiado");
		}

		if (!this.book.text) {
			error.push("- Debes escribir algo primero");
		}


		if (error.length > 0) {
			error.unshift("Antes de poder subir este texto debes solucionar los siguientes problemas: ");
			this.modal.show(error, ModalType.info, () => {})
		} else {
			this.modal.show(["Esta accion no se puede deshacer", "¿Estas segur@ de que quieres publicar este texto?"], ModalType.question, () => {
				this.book.status = "finish";
				if (this.update) {
					this.http.updateText(this.book, (a)=>{console.log(a)});
				} else {
					this.http.uploadText(this.book, (a)=>{console.log(a)});
					this.update = true;
				}
			});
		}
	}

	onUpdateClick() {
		if (this.update) {
			this.http.updateText(this.book, (a)=>{console.log(a)});
		} else {
			this.http.uploadText(this.book, (a)=>{console.log(a)});
			this.update = true;
		}
	}
}