import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent {
  @Input() title: string;
  @Input() cards: [];

  constructor(private cardService: CardService) {}

  didDrop(card, targetState) {
    if (card.state !== targetState) {
      this.cardService.moveCard(parseInt(card.id), targetState);
      console.log(this.cards)
    }
  }

  filterByState = card => {
    return card.state === this.title;
  }


  onDragStart(event, card) {
    event.dataTransfer.setData('card', JSON.stringify(card));
  }

  onDrop(event) {
    const position = document.elementFromPoint(event.clientX, event.clientY);
    const state = position.closest('.state').id;
    const card = JSON.parse(event.dataTransfer.getData('card'));
    this.didDrop(card, state);
    event.preventDefault();
  }

  allowDrop(event) {
    event.preventDefault();
  }
}
