import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent {
  @Input() title: String;
  @Input() cards: [];
  @Output() cardsChange = new EventEmitter<any>();
  cardService: CardService;

  constructor(cardService: CardService) {
    this.cardService = cardService;
  }

  addCard() {
    const newCard = this.cardService.createCard('Title', 'Description', 10);
    this.cardsChange.emit([...this.cards, newCard]);
  }
}
