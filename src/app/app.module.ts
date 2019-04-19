import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StateComponent } from './state/state.component';
import { CardComponent } from './card/card.component';

import { CardService } from './services/card.service';
import { ModalComponent } from './modal/modal.component';
import { FilterPipe } from './filter.pipe';
import { SumPipe } from './sum.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    CardComponent,
    ModalComponent,
    FilterPipe,
    SumPipe
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
