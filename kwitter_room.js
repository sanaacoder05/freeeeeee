
  const firebaseConfig = {
    apiKey: "AIzaSyD6aK9YyY1NOHA1c3sf4zaeMc9_L17oHEw",
    authDomain: "class-94-2e397.firebaseapp.com",
    databaseURL: "https://class-94-2e397-default-rtdb.firebaseio.com",
    projectId: "class-94-2e397",
    storageBucket: "class-94-2e397.appspot.com",
    messagingSenderId: "324550860806",
    appId: "1:324550860806:web:a9b2af0c445ddb9c21a387",
    measurementId: "G-SFC99WKFN0"
  };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);

      
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

     
    
     
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
