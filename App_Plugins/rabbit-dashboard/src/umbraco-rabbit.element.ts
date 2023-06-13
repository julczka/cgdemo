import { LitElement, css, html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import './coffee.element';
import './head.element';
import './hand.element';
import './belly.element';
import { TheRabbitHeadElement } from './head.element';
import { CoffeeElement } from './coffee.element';

@customElement('umbraco-rabbit')
export class TheRabbit extends LitElement {
  //equals to this.shadowRoot.querySelector('#belly')
  @query('the-head')
  head?: TheRabbitHeadElement;

  @state()
  _hasDisruptedBelly = false;

  upsetStomach() {
    this._hasDisruptedBelly = true;
    setTimeout(() => {
      this._hasDisruptedBelly = false;
    }, 5000);
  }

  constructor() {
    super();
    this.addEventListener('eat-carrot', () => {
      this.head?.say('Yum! Carrots are good for your eyes!');
    });
  }

  comment(event: Event) {
    const target = event.target as CoffeeElement;
    if (target.strength > 10) {
      this.head?.say('Yuck! That was too strong!');
    } else {
      this.head?.say("Gulp! That's good coffee!");
    }
  }

  render() {
    return html`
      <the-head timeout="5000"></the-head>
      <the-belly
        @drink-coffee=${this.upsetStomach}
        ?disrupted=${this._hasDisruptedBelly}
      >
        <the-hand id="hand-l">
          <the-coffee @drink-coffee=${this.comment} strength="11"></the-coffee>
        </the-hand>
        <the-hand id="hand-r">
          <the-carrot></the-carrot>
        </the-hand>
      </the-belly>
      <div id="legs">
        <div class="leg left"></div>
        <div class="leg right"></div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin: 140px auto;
      position: relative;
    }

    the-head {
      z-index: 1;
    }

    #legs {
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 0;
      width: 200px;
    }

    .leg {
      width: 50px;
      height: 100px;
      background-color: #fff;
      border: var(--uui-color-border) 2px solid;
      border-radius: 50%;
    }

    .leg.left {
      transform: rotate(-20deg);
    }

    .leg.right {
      transform: rotate(20deg);
    }

    .hand-placeholder {
      width: 50px;
      height: 150px;
      border: var(--uui-color-border) 2px dashed;
      border-radius: 50%;
      transform-origin: top center;
    }

    #hand-l {
      transform: translate(20px, 30px) rotate(50deg);
    }

    #hand-r {
      transform: translate(-20px, 30px) rotate(-50deg);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': TheRabbit;
  }
}
