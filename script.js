
let data = {
  // API data send here
}

let controller = {
  init() {
    this.inputField = document.getElementById('inputField');
    this.inputField.addEventListener('input', this.trackInput);
  },

  trackInput(e) {
    let currentInput = e.target.value;
    console.log(currentInput);
  }




}

let view = {
  // move as much html in here as makes sense
}

controller.init();