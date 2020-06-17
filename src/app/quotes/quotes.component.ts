import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1,'I am the greatest,I said that even before I knew I was', 'Muhammad Ali', 'Ko3ch', 0, 0, new Date())  
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addNewQuote(quote){
    let quotesLength = this.quotes.length;
    quote.id = quotesLength + 1;
    quote.date = new Date();
    quote.upvote = 0;
    quote.downvote = 0;
    this.quotes.push(quote);
  }
  deleteQuote(isPlain, index){
    if (isPlain) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}'s quote?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }

    }
  }

}
