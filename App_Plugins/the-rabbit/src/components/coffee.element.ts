import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('the-coffee')
export class CoffeeElement extends LitElement {

  constructor() {
    super();
    this.addEventListener('click', this.drinkCoffee);
    this.addEventListener('drink-coffee', (e: Event) => {
      console.log('COMPOSED:',e.composed,'BUBBLES', e.bubbles, e.composedPath());

    });
  }
  
  drinkCoffee() {
    this.dispatchEvent(new CustomEvent('drink-coffee', { bubbles: false, composed: true }));
  }

  static styles = [
    css`
      :host {
        width: 130px;
        aspect-ratio: 1/1;
        background-image: url('/coffee.gif');
        background-size: contain;
        z-index: 3;
        transform: rotate(45deg) scale(1.8);
      }

    `,
  ];


}
