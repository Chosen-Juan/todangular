import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StateComponent } from './state/state.component';
import { CardComponent } from './card/card.component';

import { CardService } from './services/card.service';

@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
