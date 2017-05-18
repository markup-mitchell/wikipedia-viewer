
let data = {
  // API data send here
}

let controller = {
  init() {
    this.inputField = document.getElementById('inputField');
    this.inputField.addEventListener('keypress', function(e) {
        let key = e.which || e.keyCode; // what is this???:w
        if (key === 13) {
          controller.captureInput()
        }
    });
    this.inputField.addEventListener('input', this.trackInput);
    this.randomButton = document.getElementById('mainButton');
    // this.randomButton.addEventListener('click', this.getRandom);
    
  },

  trackInput(e) {
    // let currentInput = e.target.value;
    data.currentInput = e.target.value;
    console.log(data.currentInput);
  },

  captureInput() {
    console.log(data.currentInput);
    
  }





}

let view = {
  // move as much html in here as makes sense
}

controller.init();