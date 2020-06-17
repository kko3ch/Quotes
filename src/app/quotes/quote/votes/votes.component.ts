import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  votes: Quote;

  constructor() { 
    this.votes.upvotes = 0;
    this.votes.downvotes = 0;
  }

  ngOnInit(): void {
  }

}
