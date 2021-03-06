<!--

<span id="ajax" style="cursor:pointer;text-decoration:underline">
  make the request
</span>


<script>
(function() {

  let re
  // document.getElementById('ajax').onclick = function() { makeRequest('about.html') }
  document.getElementById('ajax').onclick = function() { makeRequest('about.xml') }


  function makeRequest(url) {
    re = new XMLHttpRequest()
    if (!re) {
      alert('giving up. :(')
      return false
    }
    re.onreadystatechange = alertContents
    re.open('GET', url)
    re.send()
  }

  function alertContents() {
    if (re.readyState === 4) {
      if (re.status === 200) {
        const xml = re.responseXML
        const root = xml.getElementsByTagName('root')[0]
        alert(root.firstChild.data)
        // alert(re.responseText)
      } else {
        alert('there was an error. :(')
      }
    }
  }
})();
</script>
-->



const re = new XMLHttpRequest()

/*
    XMLHttpRequest.readyState(s):
   -------------------------------
      0. uninitialized
      1. loading
      2. loaded
      3. interactive
      4. complete
*/

re.onreadystatechange = function() {
  // XMLHttpRequest.DONE === 4
  if (re.readyState === 4) {
    document.body.style.backgroundColor = '#c495c4'
    // response code of the HTTP server response
    if (re.status === 200) {
      console.log('ayyy')
    } else {
      console.log('error')
    }
  } else {
    document.body.style.backgroundColor = '#689aca'
  }
}

re.open('GET', '/about.html')
re.send(null)


// global variables
var btn = document.getElementById('request')
var bio = document.getElementById('bio')

// create XMLHttpRequest object
var request = new XMLHttpRequest()

// calls this function every time the XMLHttpRequest onreadystatechange
// function changes
request.onreadystatechange = function() {
  // readyState property specified the state of the request [0-4]
  if (request.readyState === 4) {
    bio.style.border = '1px solid #e8e8e8'
    // status property indicates whether the request is successful or not
    if (request.status === 200) {
      bio.innerHTML = request.responseText
    } else {
      bio.innerHTML = `an error occured during your request: ${request} ${request.statusText}`
    }
  }
}

// open method specifies the type of the request [GET//POST]
request.open('GET', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/Bio.txt')

// submit the request when the button is clicked via the send method
btn.addEventListener('click', function() {
  this.style.display = 'none'
  request.send()
})



var xhrObject = new XMLHttpRequest();

xhrObject.onreadystatechange = function() {
  if (xhrObject.readyState === 4) {
    if (xhrObject.status === 200 || xhrObject.status === 304) {

      console.log(xhrObject.responseText);
      document.body.innerHTML = xhrObject.responseText;

    }
  }
};

xhrObject.open(
  "GET",
  "http://codepen.io/chriscoyier/pen/difoC.html",
  true
);
xhrObject.send();
