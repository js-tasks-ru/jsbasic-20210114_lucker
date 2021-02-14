function toggleText() {
  let button = document.querySelectorAll(".toggle-text-button");
  let text = document.querySelector("#text");
  for(let el in button) {
    button[el].onclick = function() {
      if(text.hidden) {
        text.removeAttribute('hidden')
      } else {
        text.hidden = 'hidden';
      }
    }
  }
}
