<script>
  import Header from "./UI/Header.svelte";
  import AgreezGrid from "./Features/AgreezGrid.svelte";

  let title = '';
  let subtitle = ''; 
  let address = '';
  let email = '';
  let description = '';
  let imageUrl = '';

  let agreezs = [
    {
      id: "a1",
      title: "Programing Languages",
      subtitle: "Agreez what programing languages are suited for our needs",
      description:
        "In this agreez , we will have some experts in frontend and backend programing languages",
      imageUrl: "https://miro.medium.com/max/1400/1*L5QyrMNalM3yhtgdgBcvkQ.png",
      address: "26th Seraj str , Shiraz",
      contactEmail: "pl@test.com",
    },
    {
      id: "a2",
      title: "Frameworks",
      subtitle: "Agreez what frameworks are suited for our needs",
      description: "In this agreez , we will have some experts in frameworks",
      imageUrl: "https://miro.medium.com/max/2000/1*ItGd7Itb99Cr6rE4qVD8wg.png",
      address: "12th Eram blv , Shiraz",
      contactEmail: "fr@test.com",
    },
  ];

  function addAgreez(){
    const newAgreez = {
      id: Math.random().toString(),
      title: title ,
      subtitle: subtitle,
      description: description,
      imageUrl: imageUrl,
      contactEmail: email,
      address: address
    };
    agreezs = [newAgreez,...agreezs];
  };
</script>

<Header />

<main>
  <form on:submit|preventDefault="{addAgreez}">
    <div class="form-control">
      <label for="title">Title</label>
      <input type="text" id="title" bind:value="{title}"/>
    </div>
    <div class="form-control">
      <label for="subtitle">Subtitle</label>
      <input type="text" id="subtitle" bind:value="{subtitle}"/>
    </div>
    <div class="form-control">
      <label for="address">Address</label>
      <input type="text" id="address" bind:value="{address}"/>
    </div>
    <div class="form-control">
      <label for="imageUrl">Image URL</label>
      <input type="text" id="imageUrl" bind:value="{imageUrl}"/>
    </div>
    <div class="form-control">
      <label for="email">E-Mail</label>
      <input type="email" id="email" bind:value="{email}"/>
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea rows="3" id="description" bind:value="{description}"/>
    </div>
    <button type="submit">Save</button>
  </form>

  <AgreezGrid {agreezs} />
</main>

<style>
  main {
    margin-top: 5rem;
  }
</style>
