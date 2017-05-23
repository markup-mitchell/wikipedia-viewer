
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
    view.init();
  },

  trackInput(e) {
    data.currentInput = e.target.value;
    console.log(data.currentInput);
  },

  submitQuery() {
    let apiQuery = this.generateQuery();
    this.sendQuery(apiQuery).then(function(response) {
      console.log(response);
      let resultsObj =  JSON.parse(response);
      view.clear();
      view.render(resultsObj); // should send the results to data, actually, then call an update function to pass it to view.render
      data.currentInput = '';
      document.getElementById('inputField').value = data.currentInput;
    });
  },

  generateQuery() {
    let proxyCORS = "https://cors-anywhere.herokuapp.com/";
    let searchTerms = data.currentInput.replace(/ /g, '%20');
    return proxyCORS + `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerms}`; 
  },

  sendQuery(apiQuery) { 
    return new Promise(function(resolve,reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', apiQuery);
        xhr.send(null);
        xhr.onload = function() {
            if (xhr.status === 200) {
              // console.log(xhr.response);
                resolve(xhr.response);
            }
            else {
                reject(Error(xhr.status));
            };
        }
      xhr.send
    })
  },


}

let view = {
  // move as much html in here as makes sense
  init() {
    this.resultsBox = document.getElementById('resultsBox');
  },
  render(results) {
    this.resNames = results[1]; // all this should be parsed into data object!
    this.resSummaries = results[2];
    this.resUrls = results[3];
    
    for (i=0; i < this.resNames.length; i++){
      let result = document.createElement('div');
      let titleHead = document.createElement('h2');
      let titleText = document.createTextNode(this.resNames[i]);
      let summary = document.createTextNode(this.resSummaries[i])
      titleHead.appendChild(titleText);
      result.appendChild(titleHead);
      result.appendChild(summary);
      result.appendChild(document.createElement('hr'));
      this.resultsBox.appendChild(result);
    };
  },

  clear() {
    while(this.resultsBox.hasChildNodes()) {
      this.resultsBox.removeChild(this.resultsBox.lastChild)
    }
  }

}

controller.init();