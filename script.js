
let data = {
  // API data send here
}

let controller = {
  init() {
    this.inputField = document.getElementById('inputField');
    this.inputField.addEventListener('keypress', function(e) {
        let key = e.which || e.keyCode; // what is this???:w
        if (key === 13) {
          controller.submitQuery()
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

  submitQuery() {
    console.log(data.currentInput);
    controller.generateQuery();
  },

  generateQuery() {
    let searchTerms = data.currentInput;
    searchTerms = searchTerms.replace(/ /g, '%20');
    console.log(searchTerms);
  }





}

let view = {
  // move as much html in here as makes sense
}

controller.init();