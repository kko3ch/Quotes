import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/quote';


@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  newQuote = new Quote(0,'','','',0,0, new Date());

  @Output() addQuote = new EventEmitter<Quote>();

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    this.addQuote.emit(this.newQuote);
  }
}
