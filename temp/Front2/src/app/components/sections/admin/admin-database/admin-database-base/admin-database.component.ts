import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../../../services/http/http.service";


@Component({
  selector: 'app-admin-database',
  templateUrl: './admin-database.component.html',
  styleUrls: ['./admin-database.component.sass']
})
export class AdminDatabaseComponent implements OnInit {

  data: any;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.get("http://127.0.0.1:3000/user",(data:any) => {this.data = data; console.log(data);});
  }

  edit() {
    
  }
}
