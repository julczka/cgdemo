const template = document.createElement("template");
template.innerHTML = /*html*/`
    <style>
    :host {    
        display: flex;
        margin: 2em auto;
        justify-content: center;
    }
    #count {
        margin: 0 1em;
        font-size: 2em;
    }
    </style>
  <uui-button id="decrement" look="primary">-</uui-button>
  <span id="count"> 0 </span>
  <uui-button id="increment" look="primary">+</uui-button>`;

class MyVanillaDashboardCounter extends HTMLElement {

    static get observedAttributes() { return ['count']; }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this._count = 0;
    }

    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.getElementById("increment").onclick = () => this.increment();
        this.shadowRoot.getElementById("decrement").onclick = () => this.decrement();
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name = "count") this.count = newValue;
    }

    get count() {
        return this._count;
    }

    set count(newVal) {
        this._count = newVal;
        this.setAttribute('count', this._count)
        this.render();
    }

    increment() {
        ++this.count;
    }

    decrement() {
        --this.count;
    }

    render() {
        this.shadowRoot.getElementById("count").innerHTML = this._count;
    }

}

customElements.define("vanilla-dashboard", MyVanillaDashboardCounter);