import { LitElement, css, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import './coffee.element';
import './head.element';
import './hand.element';
import { TheRabbitHeadElement } from './head.element';

@customElement('umbraco-rabbit')
export class TheRabbit extends LitElement {
  //equals to this.shadowRoot.querySelector('#belly')
  @query('#belly')
  belly?: HTMLElement;

  @query('the-rabbit-head')
  head?: TheRabbitHeadElement;

  upsetStomach() {
    this.belly?.classList.add('after-coffee');
    setTimeout(() => {
      this.belly?.classList.remove('after-coffee');
    }, 5000);
  }

  comment = (e: Event) => {
    console.log(
      'WINDOW',
      'COMPOSED:',
      e.composed,
      'BUBBLES',
      e.bubbles,
      e.composedPath()
    );

    this.head?.say("I don't like coffee!");
  };

  render() {
    return html`
      <the-rabbit-head></the-rabbit-head>
      <div id="belly" @drink-coffee=${this.upsetStomach}>
        <the-hand id="hand-l"><the-coffee></the-coffee></the-hand>
        <the-hand id="hand-r"></the-hand>
      </div>
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

    the-rabbit-head {
      z-index: 1;
    }

    #belly {
      width: 200px;
      height: 250px;
      background-color: #fff;
      border-radius: 50%;
      border: var(--uui-color-border) 2px solid;
      position: relative;
      display: flex;
      justify-content: space-between;
    }

    .after-coffee {
      background-image: url('/App_Plugins/rabbit-dashboard/dist/bubbles.gif');
      background-size: contain;
    }

    #legs {
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 0;
      width: 30%;
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