import { LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { coffeeSvg } from './assets/coffee.svg';

@customElement('the-coffee')
export class CoffeeElement extends LitElement {
  @property({ type: Number })
  strength = 1;

  constructor() {
    super();
    this.addEventListener('click', this.drinkCoffee);
  }

  drinkCoffee() {
    this.dispatchEvent(
      new CustomEvent('drink-coffee', {
        bubbles: this.strength > 10,
        composed: false,
      })
    );
  }

  render() {
    return coffeeSvg;
  }

  static styles = [
    css`
      :host {
        width: 130px;
        aspect-ratio: 1/1;
        z-index: 3;
        transform: rotate(300deg) scale(1.2);
        cursor: pointer;
      }
    `,
  ];
}
