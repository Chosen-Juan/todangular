import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  id: number = 0;
  createCard(title: String, description: String, estimate: number, state: String) {
    this.id++;
    return {
      id: this.id,
      title, description, estimate, state
    };
  }

}
