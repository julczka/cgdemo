import { LitElement, css, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { TheRabbitHeadElement } from '.';

@customElement('the-rabbit')
export class TheRabbit extends LitElement {

  //equals to this.shadowRoot.querySelector('#belly')
  @query('#belly')
  belly?: HTMLElement;

  @query('the-rabbit-head')
  head?: TheRabbitHeadElement;

  upsetStomach(e: CustomEvent) {
    console.log('BELLY','COMPOSED:',e.composed,'BUBBLES', e.bubbles, e.composedPath());
    this.belly?.classList.add('after-coffee');
    setTimeout(() => {
      this.belly?.classList.remove('after-coffee');
    }, 5000);
  }

  comment = (e: Event) => {
    console.log('WINDOW', 'COMPOSED:',e.composed,'BUBBLES', e.bubbles, e.composedPath());

    this.head?.say('I don\'t like coffee!');
  }

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('drink-coffee', this.comment);
  }

  render() {
    return html`
      <the-rabbit-head></the-rabbit-head>
      <div id="belly" @drink-coffee=${this.upsetStomach}>
        <slot name="hand-l">
          <div class="hand-placeholder left"></div>
        </slot>
        <slot name="hand-r">
          <div class="hand-placeholder right"></div>
        </slot>
      </div>
      <div id="legs">
        <div class="legs left-leg"></div>
        <div class="legs right-leg"></div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      margin: 0 auto;
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
      background-image: url('/bubbles.gif');
      background-size: contain;
    }

    #legs {
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 0;
      width: 100%;
    }

    .legs {
      width: 50px;
      height: 100px;
      background-color: #fff;
      border: var(--uui-color-border) 2px solid;
      border-radius: 50%;
    }

    .left-leg {
      transform: rotate(-20deg);
    }

    .right-leg {
      transform: rotate(20deg);
    }

    .hand-placeholder {
      width: 50px;
      height: 150px;
      border: var(--uui-color-border) 2px dashed;
      border-radius: 50%;
      transform-origin: top center;
    }

    slot[name='hand-l']::slotted(*),
    .hand-placeholder.left {
      transform: translate(20px, 30px) rotate(50deg);
    }

    slot[name='hand-r']::slotted(*),
    .hand-placeholder.right {
      transform: translate(-20px, 30px) rotate(-50deg);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': TheRabbit;
  }
}
