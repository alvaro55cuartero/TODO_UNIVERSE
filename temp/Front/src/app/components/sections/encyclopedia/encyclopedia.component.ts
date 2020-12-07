import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-encyclopedia',
  templateUrl: './encyclopedia.component.html',
  styleUrls: ['./encyclopedia.component.sass']
})
export class EncyclopediaComponent implements OnInit {

  encForm;

  constructor(private formBuilder: FormBuilder) {
    this.encForm = this.formBuilder.group({
      keyword:['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.encForm.value);
  }

}
