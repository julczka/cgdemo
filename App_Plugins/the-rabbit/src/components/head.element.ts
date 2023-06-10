import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('the-rabbit-head')
export class TheRabbitHeadElement extends LitElement {
  @property({ type: String })
  message = '';

  resetMessage(timeout: number = 1000) {
    setTimeout(() => {
      this.message = '';
    }, timeout);
  }

  #sayHello() {
    this.say('Hello!');
  }

  say(message: string) {
    this.message = message;
    this.resetMessage();
  }

  constructor() {
    super();
    this.addEventListener('click', this.#sayHello);
  }

  render() {
    return html`
    <span id="message">${this.message}</span>
      <div class="ears left-ear"></div>
      <div class="ears right-ear"></div>
      <div id="nose"></div>
      <div id="mouth">
        <div class="mouth left"></div>
        <div class="mouth right"></div>
      </div>
    `;
  }

  static styles = [
    css`
      :host {
        display: block;
        background-color: #fff;
        border-radius: 50%;
        border: var(--uui-color-border) 2px solid;
        width: 200px;
        height: 150px;
        top: 40px;
        position: relative;
      }

      :host::before,
      :host::after {
        content: '';
        position: absolute;
        height: 15px;
        width: 5px;
        border-radius: 100%;
        background-color: #333;
        top: 70px;
      }

      :host::before {
        left: 70px;
      }

      :host::after {
        right: 70px;
      }

      #message {
        position: absolute;
        top: 40%;
        left: 120%;
      }

      #nose {
        position: absolute;
        width: 30px;
        height: 18px;
        background-color: #333;
        border-radius: 60% 60% 100% 100%;
        left: 50%;
        margin-left: -15px;
        top: 100px;
        z-index: 5;
      }

      #mouth {
        position: absolute;
        top: 100px;
        left: 42%;
      }

      .mouth {
        position: absolute;
        width: 50px;
        height: 40px;
        border-radius: 100%;
        background-color: var(--uui-palette-spanish-pink);
      }

      .mouth.left {
        left: -20px;
      }

      .mouth.right {
        left: 0px;
      }

      .ears {
        position: absolute;
        height: 200px;
        width: 50px;
        background-color: #fff;
        border-radius: 80% 80% 90% 90%;
        border: var(--uui-color-border) 2px solid;
        border-bottom: none;
        top: -100%;
      }

      .ears::before {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: var(--uui-palette-spanish-pink-light);
        border-radius: 80% 80% 90% 90%;
        transform: scale(0.7);
      }

      .left-ear {
        -webkit-transform: rotate(-15deg);
        transform: rotate(-15deg);
        left: 25px;
      }

      .right-ear {
        -webkit-transform: rotate(15deg);
        transform: rotate(15deg);
        right: 25px;
      }
    `,
  ];
}
