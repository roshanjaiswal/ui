// readyState	Holds the status of the XMLHttpRequest.
// 0: request not initialized  --- UNSENT
// 1: server connection established --- OPENED
// 2: request received --- HEADER_OPENED
// 3: processing request --- LOADING
// 4: request finished and response is ready --- DONE


// status	200: "OK"
// 403: "Forbidden"
// 404: "Page not found"  etc.
//-----------------------------------------------------------
const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users")
request.send(); // data will be fatched and can be seen on the network tab (developer mode)

// to work with the response
request.onload = () => {
    console.log(request);
    if(request.status === 200) {
        console.log(JSON.parse(request.response))
    } else {
        console.log(`error ${request.status}`)
    }
}



//------------------------------------------
if (window.XMLHttpRequest) {
    // code for modern browsers
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for old IE browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
 }

 //---------------------------------------------------------------
 function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }
  //--------------------------------------------------------
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/server', true);
  
  xhr.onload = function () {
    // Request finished. Do processing here.
  };
  
  xhr.send(null);
  // xhr.send('string');
  // xhr.send(new Blob());
  // xhr.send(new Int8Array());
  // xhr.send(document);
 
//--------------------------------------------------------------------------------
var xhr = new XMLHttpRequest();
xhr.open("POST", '/server', true);

//Send the proper header information along with the request
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        // Request finished. Do processing here.
    }
}
xhr.send("foo=bar&lorem=ipsum");
// xhr.send(new Int8Array())
// xhr.send(document);



//-------------------------------------------------------------------
var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
var theUrl = "/json-handler";
xmlhttp.open("POST", theUrl);
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.send(JSON.stringify({ "email": "hello@user.com", "response": { "name": "Tester" } }));