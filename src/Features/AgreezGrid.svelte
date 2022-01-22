<script>
  import AgreezItem from "./AgreezItem.svelte";
  export let agreezs;
</script>

<style>
    section{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }
    @media (min-width: 768px){
        section {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>

<section id="agreezs">
  {#each agreezs as agreez}
    <AgreezItem
      title={agreez.title}
      subtitle={agreez.subtitle}
      imageUrl={agreez.imageUrl}
      description={agreez.description}
      email={agreez.contactEmail}
      address={agreez.address}
    />
  {/each}
</section>
