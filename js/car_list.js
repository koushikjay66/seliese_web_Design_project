function load_Car() {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };
  xhttp.open("GET", "https://carhouse-86ffa.firebaseio.com/Cars.json", true);
  xhttp.send();
}