import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StateComponent } from './state/state.component';
import { CardComponent } from './card/card.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CardService } from './services/card.service';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    CardComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
