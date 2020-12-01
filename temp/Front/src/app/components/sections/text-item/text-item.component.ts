import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { HttpService } from "../../../services/http.service";


@Component({
  selector: 'app-text-item',
  templateUrl: './text-item.component.html',
  styleUrls: ['./text-item.component.sass']
})
export class TextItemComponent implements OnInit {

  @Input() text;
  upvote = false;
  downvote = false;

  constructor(
    private router: Router,
    private http: HttpService
  ) {}

  ngOnInit(): void {
    if (this.text.votes) {
      this.upvote = this.text.votes[0].vote == "up";
      this.downvote  = this.text.votes[0].vote == "down";
    }
  }

  onBookClick() {
    this.router.navigate([`/book/${this.text.title}`]);
  }

  onAuthorClick() {
    this.router.navigate([`/profile/${this.text.username}`]);
  }

  onUpvoteClick(event) {
    this.upvote = !this.upvote;
    this.downvote = false;
    event.stopPropagation();
    this.vote("up");
  }

  onDownvoteClick(event) {
    this.downvote = !this.downvote;
    this.upvote = false;
    event.stopPropagation();
    this.vote("down");
  }

  vote(vote) {
    let body = {
      vote:vote,
      textId:this.text._id
    }
    this.http.vote(body, this.text.title, (err) => {console.log(err)});
  }

}
