

function loadText(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'sometext.txt', true)
  
    xhr.onload = function(){
    if(xhr.status==200){
        console.log(xhr.responseText)
    }
    }
      xhr.send() 
  }
// module.exports = {loadText}


function changeContent() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("foo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "sometext.txt", true);
  xhttp.send();
}

module.exports = {loadText, changeContent}