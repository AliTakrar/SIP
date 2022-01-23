<script>
  import Header from "./UI/Header.svelte";
  import AgreezGrid from "./Features/AgreezGrid.svelte";
  import EditAgreez from "./Features/EditAgreez.svelte";
  import Button from "./UI/Button.svelte";

  let agreezs = [
    {
      id: "a1",
      title: "Programing Languages",
      subtitle: "Agreez what programing languages are suited for our needs",
      description:
        "In this agreez , we will have some experts in frontend and backend programing languages",
      imageUrl:
        "http://101.xsoft.am/wp-content/uploads/2021/12/Best-Programming-Languages-1.jpg",
      address: "26th Seraj str , Shiraz",
      contactEmail: "pl@test.com",
      isFavorite: false,
    },
    {
      id: "a2",
      title: "Frameworks",
      subtitle: "Agreez what frameworks are suited for our needs",
      description: "In this agreez , we will have some experts in frameworks",
      imageUrl:
        "https://ares.decipherzone.com/blog-manager/uploads/banner_webp_6e31c361-f096-4a6a-a883-a561798afcd8.webp",
      address: "12th Eram blv , Shiraz",
      contactEmail: "fr@test.com",
      isFavorite: false,
    },
  ];

  let editMode;

  function addAgreez(event) {
    const newAgreez = {
      id: Math.random().toString(),
      title: event.detail.title,
      subtitle: event.detail.subtitle,
      description: event.detail.description,
      imageUrl: event.detail.imageUrl,
      contactEmail: event.detail.email,
      address: event.detail.address,
    };
    agreezs = [newAgreez, ...agreezs];
    editMode = null;
  }

  function toggleFavorite(event) {
    const id = event.detail;
    const updatedAgreez = { ...agreezs.find((a) => a.id === id) };
    updatedAgreez.isFavorite = !updatedAgreez.isFavorite;
    const agreezIndex = agreezs.findIndex((a) => a.id === id);
    const updatedAgreezs = [...agreezs];
    updatedAgreezs[agreezIndex] = updatedAgreez;
    agreezs = updatedAgreezs;
  }

  function cancelEdit(){
    editMode = null;
  }
</script>

<Header />

<main>
  <div class="agreez-controls">
    {#if editMode !== "add"}
      <Button mode="outline"  on:click={() => (editMode = "add")} >New Agreez</Button>
    {/if}
  </div>

  {#if editMode === "add"}
    <EditAgreez on:save={addAgreez} on:cancel={cancelEdit} />
  {/if}
  <AgreezGrid {agreezs} on:toggleFavorite={toggleFavorite} />
</main>

<style>
  main {
    margin-top: 5rem;
  }

  .agreez-controls {
    margin: 1rem;
  }
</style>
