<script>
  import { createEventDispatcher } from "svelte";
  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  import Modal from "../UI/Modal.svelte";
  import { isEmpty , isValidEmail } from "../helpers/validation.js";

  let title = "Title";
  let titleValid = false;
  let subtitle = "Subtitle";
  let subtitleValid = false;
  let address = "Address";
  let addressValid = false;
  let email = "E-Mail";
  let emailValid = false;
  let description = "Description";
  let descriptionValid = false;
  let imageUrl = "Image Url";
  let imageUrlValid = false;

  const dispatch = createEventDispatcher();

  $: titleValid = !isEmpty(title);
  $: subtitleValid = !isEmpty(subtitle);
  $: addressValid = !isEmpty(address);
  $: emailValid = isValidEmail(email);
  $: descriptionValid = !isEmpty(description);
  $: imageUrlValid = !isEmpty(imageUrl);

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
      valid={titleValid}
      validityMessage="Please enter a valid title it should has atleast 3 characters."
      value={title}
      on:click={(event) =>
        title === "Title" ? (title = "") : (title = event.target.value)}
      on:input={(event) => (title = event.target.value)}
    />
    <!-- on:blur={(event) =>
        title === "" ? (title = "Title") : (title = event.target.value)} -->
    <TextInput
      id="subtitle"
      label="Subtitle"
      valid={subtitleValid}
      validityMessage="Please enter a valid Subtitle it should has atleast 3 characters."
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
      valid={addressValid}
      validityMessage="Please enter a valid Address it should has atleast 3 characters."
      value={address}
      on:click={(event) =>
        address === "Address" ? (address = "") : (address = event.target.value)}
      on:input={(event) => (address = event.target.value)}
    />
    <TextInput
      id="imageUrl"
      label="Image Url"
      valid={imageUrlValid}
      validityMessage="Please enter a valid Image Url it should has atleast 3 characters."
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
      valid={emailValid}
      validityMessage="Please enter a valid E-Mail address."
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
      valid={descriptionValid}
      validityMessage="Please enter a valid Description it should has atleast 3 characters."
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
