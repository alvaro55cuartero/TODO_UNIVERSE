import { Component, OnInit } from '@angular/core';
import {  HttpService } from "../../../services/http.service";

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.sass']
})
export class TextsComponent implements OnInit {
  texts;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getTexts((data:any) => {this.texts = data; console.log(data);
    });
  }

}
