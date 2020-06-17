import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighestUpvoteDirective } from './highest-upvote.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteComponent } from './quotes/quote/quote.component';
import { QuotesFormComponent } from './quotes/quotes-form/quotes-form.component';
import { VotesComponent } from './quotes/quote/votes/votes.component';

@NgModule({
  declarations: [
    AppComponent,
    HighestUpvoteDirective,
    DateCountPipe,
    QuotesComponent,
    QuoteComponent,
    QuotesFormComponent,
    VotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
