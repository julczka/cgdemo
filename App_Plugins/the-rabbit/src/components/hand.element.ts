import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('the-rabbit-hand')
export class HandElement extends LitElement {
  render() {
    return html`<slot><div id="placeholder"></div></slot>`;
  }

  constructor() {
    super();
    this.addEventListener('drink-coffee', (e: Event) => {
      console.log(
        'HAND',
        'COMPOSED:',
        e.composed,
        'BUBBLES',
        e.bubbles,
        e.composedPath()
      );
    });
  }

  static styles = [
    css`
      :host {
        width: 50px;
        height: 150px;
        display: flex;
        align-items: flex-end;
        border: var(--uui-color-border) 2px solid;
        border-radius: 50%;
        transform-origin: top center;
        background-color: #fff;
        z-index: 2;
      }

      #placeholder {
        width: 50px;
        height: 50px;
        border: var(--uui-color-border) 2px dashed;
        border-radius: 50%;
        transform: translateY(20px);
      }
    `,
  ];
}
