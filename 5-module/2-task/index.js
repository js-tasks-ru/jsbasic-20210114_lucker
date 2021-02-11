function toggleText() {
  let button = document.querySelectorAll(".toggle-text-button");
  let text = document.querySelector("#text");
  console.log(text);
  for(let el in button) {
    button[el].onclick = function() {
      console.log(1)
      if(text.hidden) {
        text.removeAttribute('hidden')
      } else {
        text.hidden = 'hidden';
      }
    }
  }
}
