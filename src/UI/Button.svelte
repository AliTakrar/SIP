<script>
  export let type = "button";
  export let href = null;
  export let mode = null;
  export let color = null;
</script>

{#if href}
  <a class="{mode} {color}" {href}><slot /></a>
{:else}
  <button class="{mode} {color}" {type}  on:click ><slot /></button>
{/if}

<style>
  button,
  a {
    font: inherit;
    border: 1px solid rgb(0, 192, 100);
    background: rgb(0, 192, 100);
    padding: 0.5rem 1rem;
    color: white;
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    text-decoration: none;
  }

  button:focus {
    outline: none;
  }

  button:hover,
  button:active,
  a:hover,
  a:active {
    background: rgb(0, 192, 100);
    border-color: rgb(0, 192, 100);
    box-shadow: 1px 1px 8px rgba(117, 247, 124, 0.26);
  }

  button:disabled,
  button:disabled:hover,
  button:disabled:active {
    background: #ccc;
    border-color: #ccc;
    color: #959595;
    box-shadow: none;
    cursor: not-allowed;
  }

  .success {
    background: rgb(218, 42, 42);
    border-color: rgb(218, 42, 42);
  }

  .success:hover,
  .success:active {
    background: rgb(218, 42, 42);
    border-color: rgb(218, 42, 42);
  }

  .outline {
    background: transparent;
    color: rgb(0, 192, 100);
    box-shadow: none;
  }

  .outline:hover,
  .outline:active {
    background: #adffc2;
    box-shadow: none;
  }

  .outline:disabled,
  .outline:disabled:hover,
  .outline:disabled:active {
    background: transparent;
    color: #ccc;
  }

  .outline.success {
    border-color: rgb(218, 42, 42);
    color: rgb(218, 42, 42);
  }

  .outline.success:hover,
  .outline.success:active {
    background: #ffc0c0;
  }
</style>