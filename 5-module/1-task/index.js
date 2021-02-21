function hideSelf() {
  let button = document.querySelectorAll(".hide-self-button");
  for(let el in button) {
    button[el].onclick = function() {
      this.hidden = 'hidden';
     }
}
}
