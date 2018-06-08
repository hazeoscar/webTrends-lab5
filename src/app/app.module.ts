import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// and this,
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GuestlistComponent } from './guestlist/guestlist.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestlistComponent
  ],
  imports: [
    BrowserModule,
    // add this, the order matters
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
