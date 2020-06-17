import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote: Quote;
  showDetails: boolean = true;

  @Output() isPlain  = new EventEmitter<boolean>();
  
  quoteDelete(plain: boolean){
    this.isPlain.emit(plain);
  }

  constructor() { 
    this.showDetails = false;
  }

  ngOnInit(): void {
  }

  onToggleDetails(){
    this.showDetails = !this.showDetails;
  }
  addUpVotes(){
    this.quote.upvotes + 1;
  }
  addDownVotes(){
    this.quote.downvotes + 1;
  }
}
