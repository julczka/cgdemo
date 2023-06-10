import './components'

const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host{
        display: grid;
        justify-content: center;
        align-items: center;
        height: 800px;
    }

    the-rabbit {
        margin: 0 auto;
    }

  </style>
 <the-rabbit>
  <the-rabbit-hand slot="hand-r"><the-coffee></the-coffee></the-rabbit-hand>
  <the-rabbit-hand slot="hand-l"><my-counter></my-counter></the-rabbit-hand>
 </the-rabbit>`;

class TheRabbitRoot extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.addEventListener('drink-coffee', this.comment);

  }

  comment = (e: Event) => {
    console.log('ROOT', e.composed, e.bubbles, e.type);
  }



  connectedCallback() {
    this.shadowRoot?.appendChild(template.content.cloneNode(true));


  }
}

customElements.define('the-rabbit-root', TheRabbitRoot);