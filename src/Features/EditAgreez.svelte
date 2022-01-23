<script>
  import { createEventDispatcher } from "svelte";
  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  import Modal from "../UI/Modal.svelte";

  let title = "Title";
  let subtitle = "Subtitle";
  let address = "Address";
  let email = "E-Mail";
  let description = "Description";
  let imageUrl = "Image Url";

  const dispatch = createEventDispatcher();

  function submitForm() {
    dispatch("save", {
      title: title,
      subtitle: subtitle,
      address: address,
      email: email,
      description: description,
      imageUrl: imageUrl,
    });
  }
  function cancel() {
    dispatch("cancel");
  }
</script>

<Modal title="Agreez Form" on:cancel>
  <form on:submit|preventDefault={submitForm}>
    <TextInput
      id="title"
      label="Title"
      value={title}
      on:click={(event) =>
        title === "Title" ? (title = "") : (title = event.target.value)}
      on:input={(event) => (title = event.target.value)}
    />
    <TextInput
      id="subtitle"
      label="Subtitle"
      value={subtitle}
      on:click={(event) =>
        subtitle === "Subtitle"
          ? (subtitle = "")
          : (subtitle = event.target.value)}
      on:input={(event) => (subtitle = event.target.value)}
    />
    <TextInput
      id="address"
      label="Address"
      value={address}
      on:click={(event) =>
        address === "Address" ? (address = "") : (address = event.target.value)}
      on:input={(event) => (address = event.target.value)}
    />
    <TextInput
      id="imageUrl"
      label="Image Url"
      value={imageUrl}
      on:click={(event) =>
        imageUrl === "Image Url"
          ? (imageUrl = "")
          : (imageUrl = event.target.value)}
      on:input={(event) => (imageUrl = event.target.value)}
    />
    <TextInput
      id="email"
      label="E-Mail"
      value={email}
      type="email"
      on:click={(event) =>
        email === "E-Mail" ? (email = "") : (email = event.target.value)}
      on:input={(event) => (email = event.target.value)}
    />
    <TextInput
      id="description"
      label="Description"
      controlType="textarea"
      value={description}
      rows="3"
      on:click={(event) =>
        description === "Description"
          ? (description = "")
          : (description = event.target.value)}
      on:input={(event) => (description = event.target.value)}
    />
  </form>
  <div slot="footer">
    <Button type="button" mode="outline" color={"success"} on:click={cancel}
      >Cancel</Button
    >
    <Button type="button" mode="outline" on:click={submitForm}>Save</Button>
  </div>
</Modal>

<style>
  form {
    width: 100%;
    /* width: 30rem;
    max-width: 90%;
    margin: auto; */
  }
</style>
