 var firebaseConfig = {
      apiKey: "AIzaSyDYnBIcbH-Nx8nrB3Eq7GjSySwOsCVOcd4",
      authDomain: "kwitter-72d3a.firebaseapp.com",
      databaseURL: "https://kwitter-72d3a-default-rtdb.firebaseio.com",
      projectId: "kwitter-72d3a",
      storageBucket: "kwitter-72d3a.appspot.com",
      messagingSenderId: "997822086821",
      appId: "1:997822086821:web:86196772ed3dea8c3d174c",
      measurementId: "G-9XV8QGQ14V"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function addRoom() {
      addRoom = document.getElementById("add_room").value;
  
      firebase.database().ref("/").child(addRoom).update({
      project:"Adding Room"});