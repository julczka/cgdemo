<!--Add this line to your web component-->
<svelte:options tag="my-counter" />

<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { get_current_component } from "svelte/internal";



  const thisComponent = get_current_component();

  const dispatchWcEvent = (name, detail) => {
 thisComponent.dispatchEvent(new CustomEvent(name, {
 detail,
 composed: true, // propagate across the shadow DOM\
 }));}

function sayHello() {
  console.log('Hello!');
  dispatchWcEvent('message', {
			text: 'Hello!'
		});
	}

  export let answer = '🐰';
  let count: number = 0;
  let isEaten: boolean = false;
  $: {
    if (count > 3) {
      isEaten = true;
      count = 0;
      sayHello();
    } else {
      isEaten = false;
    }
  }
  const increment = () => {
    count += 1;
  };

  onMount(
				function () {
						document.addEventListener("message", (e: CustomEvent) => console.log(e.detail.text));

						return () => {
								document.removeEventListener("message",(e: CustomEvent) => console.log(e.detail.text));
						}
				}
		);
</script>

<button on:click={increment} class:eaten="{isEaten}">
  Haps: {count}
  {isEaten && answer}
</button>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
background: linear-gradient(90deg, rgba(255,179,0,1) 0%, rgba(255,179,0,0) 100%);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  .one-bite{
    background: linear-gradient(90deg, rgba(255,179,0,1) 0%, rgba(255,179,0,0) 33%);
  }

  .two-bite{
    background: linear-gradient(90deg, rgba(255,179,0,1) 0%, rgba(255,179,0,0) 66%);
  }

  .eaten {
    background-color: transparent;
    background: linear-gradient(90deg, rgba(255,179,0,1) 0%, rgba(255,179,0,0) 0%);

  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
