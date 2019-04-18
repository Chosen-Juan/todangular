import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent {
  @Input() title: String;
  @Input() cards: [];
  @Output() cardsChange = new EventEmitter<any>();

  addCard(newCard) {
    this.cardsChange.emit([...this.cards, newCard]);
  }
}
