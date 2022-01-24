export function isEmpty(val, initial) {
  if (val === initial) {
    return true;
  }
  return val.trim().length < 3;
}
export function isValidEmail(val) {
  return RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ).test(val);
}

export function isValImageUrl(val) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  const e = [val.match(pattern)];
  if (e[0]) {
    const a = e[0];
    if (a[1] && a[9]) {
      if (
        a[1] === "https://" &&
        (a[9].includes(".jpg") ||
          a[9].includes(".png") ||
          a[9].includes(".jpeg"))
      ) {
        return true;
      }
    }
  }

  return false;
}
