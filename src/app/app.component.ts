import { Component } from '@angular/core';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  states = ['Planned', 'In Progress', 'Done'];
  cards = this.cardService.cards;

  constructor(private cardService: CardService) {}

  addCard = newCard => {
    this.cards.push(newCard);
  }
}
