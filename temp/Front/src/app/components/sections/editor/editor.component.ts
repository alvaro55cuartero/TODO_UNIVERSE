import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService } from "../../../services/http.service";
import { AlertsComponent } from "../../../services/alerts/alerts.component";


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass']
})

export class EditorComponent implements OnInit {

  @ViewChild(AlertsComponent)
  private alert: AlertsComponent;

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
    private httpService: HttpService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      let title = params.get("title");
      if ( title != null) {
        this.httpService.get(`http://127.0.0.1/texts/${title}`,data => {
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
    this.alert.show("¿Estas segur@ de que quieres publicar este texto?", (err) => {
      this.book.status = "finish";
      if(!err) {
        if ( this.update) {
          this.httpService.updateText(this.book, (a)=>{console.log(a)});
        } else {
          this.httpService.uploadText(this.book, (a)=>{console.log(a)});
          this.update = true;
        }
      }
    });
  }

  onUpdateClick() {
    console.log(this.book);
    if (this.update) {
      this.httpService.updateText(this.book, (a)=>{console.log(a)});
    } else {
      console.log("upload")
      this.httpService.uploadText(this.book, (a)=>{console.log(a)});
      this.update = true;
    }
  }
}
