const features = document.querySelectorAll(".container input");

function JSPlay(){
const suffix = this.dataset.sizing || '';
  console.log(suffix);
document.documentElement.style.setProperty( `--${this.name}`,this.value + suffix);
}

features.forEach(input => input.addEventListener("change",JSPlay));
features.forEach(input => input.addEventListener("mousemove",JSPlay));