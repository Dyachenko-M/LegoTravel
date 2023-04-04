window.onscroll = () => {
  let nav = document.getElementsByTagName("nav")[0];
  scrollY > 200 ? nav.classList.add("scrolled") : nav.classList.remove("scrolled")
}
