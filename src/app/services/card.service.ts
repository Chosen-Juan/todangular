import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  id: number = 0;
  public cards = [];
  createCard(title: String, description: String, estimate: number, state: String) {
    this.id++;
    return {
      id: this.id,
      title, description, estimate, state
    };
  }

  moveCard(cardId: number, newState: string) {
    const card = this.cards.find(c => c.id === cardId);
    card.state = newState;
  }

  deleteCard(cardId) {
    const card = this.cards.find(c => c.id === cardId);
    const index = this.cards.indexOf(card);
    this.cards.splice(index, 1);
  }

}
