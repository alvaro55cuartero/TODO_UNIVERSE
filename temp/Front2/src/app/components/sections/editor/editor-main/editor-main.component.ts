import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService } from "../../../../services/http/http.service";


@Component({
  selector: 'app-editor-main',
  templateUrl: './editor-main.component.html',
  styleUrls: ['./editor-main.component.sass']
})
export class EditorMainComponent implements OnInit {

  @Input() book;
  textForm;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService
  ) {

    this.textForm = this.formBuilder.group({
        title: ['', Validators.required],
        text: ['', Validators.required]
      });
  }

  ngOnInit(): void {
  }

}
