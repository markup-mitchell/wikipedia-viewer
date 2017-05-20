
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
    var proxyCORS = "https://cors-anywhere.herokuapp.com/";
    let searchTerms = data.currentInput;
    searchTerms = searchTerms.replace(/ /g, '%20');
    console.log(searchTerms);
    fetch(proxyCORS + `https://en.wikipedia.org/w/api.php?action=query&titles=${searchTerms}&prop=revisions&rvprop=content&format=json`).then(function(response){
      return response.blob()
    }).then(function(myBlob) {
      console.log(myBlob)
    })
  }





}

let view = {
  // move as much html in here as makes sense
}

controller.init();