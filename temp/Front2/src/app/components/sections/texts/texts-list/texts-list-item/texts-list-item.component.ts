import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { HttpService } from '../../../../../services/http/http.service'

@Component({
	selector: 'app-texts-list-item',
	templateUrl: './texts-list-item.component.html',
	styleUrls: ['./texts-list-item.component.sass']
})
export class TextsListItemComponent implements OnInit {
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

	onAuthorClick(event) {
		this.router.navigate([`/profile/${this.text.username}`]);
		event.stopPropagation();
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
		//this.http.vote(body, this.text.title, (err) => {console.log(err)});
	}

}
