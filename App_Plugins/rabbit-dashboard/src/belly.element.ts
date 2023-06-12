import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('the-belly')
export class TheRabbitBellyElement extends LitElement {
  @property({ type: Boolean, reflect: true })
  disrupted = false;

  render() {
    return html`<slot></slot>`;
  }

  static styles = [
    css`
      :host {
        display: block;
        width: 200px;
        height: 250px;
        background-color: #fff;
        border-radius: 50%;
        border: var(--uui-color-border) 2px solid;
        position: relative;
        display: flex;
        justify-content: space-between;
      }

      :host([disrupted]) {
        background-image: url('/App_Plugins/rabbit-dashboard/dist/bubbles.gif');
        background-size: contain;
      }
    `,
  ];
}
