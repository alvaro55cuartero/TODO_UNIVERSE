import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService } from "../../../services/http.service";

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.sass']
})
export class ProfileUserComponent implements OnInit {

  user: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      let username = params.get("username");
      this.httpService.getProfileUser(username).subscribe((data:any) =>{
        this.user = data.user;
      });
    });
  }

  onTextReadClick(text) {
    this.router.navigate([`/book/${text.title}`]);
  }

}
