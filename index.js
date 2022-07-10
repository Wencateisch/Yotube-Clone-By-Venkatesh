/*
Need 2 Things:
(1) Show/Display Videos on Homepage
(2) Search When Something is typed in the search-box
display()
- Show/Display Videos on Homepage
- Based Upon Most Popular Videos
- Should be Called Directly WITHOUT Any Event 
(No Hover, No Click , No On Click)
- On Page Load
searchVideo()
- Search When Something is typed in the search-box
- Take the "String" typed in search-box and search on that string 
*/

let div = document.getElementById("videodiv");


// (1) Show/Display Videos on Homepage



async function display() {

    // q = Popular Videos --> Popular%20Videos (%20 -> Space)

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=artificial%20intelligence&key=AIzaSyDC-ej1rqEn_Ia92E1g3MyK-eJACxNTMFU&maxResults=25`);

    let data = await res.json();

    for ({ id: { videoId } } of data.items) {
        let videodiv = document.createElement("iframe")
        videodiv.setAttribute("class", "mons")
        videodiv.src = `https://www.youtube.com/embed/${videoId}`;
        videodiv.allow = 'fullscreen'
        div.append(videodiv)
    }

}

display();
let videoIn = document.getElementById("video");
videoIn.addEventListener("keydown",(function(event){
  if (event.key === "Enter") {
      searchVideos();
  }}))



// (2) Search When Something is typed in the search-box

async function searchVideos() {
    document.getElementById("videodiv").innerHTML = ""; // Empty 

    let query = document.getElementById("video").value; // Search String/ Query String

    //search for videos
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&key=AIzaSyDC-ej1rqEn_Ia92E1g3MyK-eJACxNTMFU&maxResults=25`);
    let data = await res.json();

    for ({ id: { videoId } } of data.items) {
        let videodiv = document.createElement("iframe")
        videodiv.setAttribute("class", "mons")
        videodiv.src = `https://www.youtube.com/embed/${videoId}`;
        videodiv.allow = 'fullscreen'
        div.append(videodiv)
    }
  }
    async function HomeButton() {
      document.getElementById("videodiv").innerHTML = ""; // Empty 
  
      let query = document.getElementById("video").value; // Search String/ Query String
  
      //search for videos
      let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=artificial%20intelligence&type=video&key=AIzaSyDC-ej1rqEn_Ia92E1g3MyK-eJACxNTMFU&maxResults=25`);
      let data = await res.json();
  
      for ({ id: { videoId } } of data.items) {
          let videodiv = document.createElement("iframe")
          videodiv.setAttribute("class", "mons")
          videodiv.src = `https://www.youtube.com/embed/${videoId}`;
          videodiv.allow = 'fullscreen'
          div.append(videodiv)
          video.value = '';
      }

}

function AllowMic(){
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(function(stream) {
        console.log('You let me use your mic!')
      })
      .catch(function(err) {
        console.log('No mic for you!')
      });
}
function AllowCam(){
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        console.log('You let me use your camera!')
      })
      .catch(function(err) {
        console.log('No camera for you!')
      });
}
function toggleMenu() {
  var menuBox = document.getElementById('menu-box');    
  if(menuBox.style.display == "block") { // if is menuBox displayed, hide it
    menuBox.style.display = "none";
  }
  else { // if is menuBox hidden, display it
    menuBox.style.display = "block";
  }
}