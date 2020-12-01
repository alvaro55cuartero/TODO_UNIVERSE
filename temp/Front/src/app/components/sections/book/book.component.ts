import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService } from "../../../services/http.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  book: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      let title = params.get("title");
      if ( title != null) {
        this.httpService.get(`http://127.0.0.1/texts/${title}`,data => {
          this.book = data;
        });
      } else {
        this.router.navigate(["/"]);
      }
    });
  }

  onAuthorClick() {
    this.router.navigate([`/profile/${this.book.username}`])
  }

}
