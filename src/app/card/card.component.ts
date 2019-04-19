import { Component, Input } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('card') card: {
    title: string,
    description: string,
    estimate: number,
    id: number,
    state: string
  };

  constructor(private cardService: CardService) {}

  changeState(e, card) {
    card.state = e.target.value;
  }

  delete(cardId) {
    this.cardService.deleteCard(cardId);
  }

}
