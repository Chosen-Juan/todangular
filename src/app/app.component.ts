import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  states = ['Planned', 'In Progress', 'Done'];
  cards = [];

  addCard = newCard => {
    this.cards.push(newCard);
  }
}
