import { LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { coffeeSvg } from './assets/coffee.svg';

@customElement('the-coffee')
export class CoffeeElement extends LitElement {
  constructor() {
    super();
    this.addEventListener('click', this.drinkCoffee);
  }

  drinkCoffee() {
    this.dispatchEvent(
      new CustomEvent('drink-coffee', { bubbles: false, composed: true })
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
      }
    `,
  ];
}
