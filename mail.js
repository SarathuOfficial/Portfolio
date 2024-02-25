const firebaseConfig = {
    apiKey: "AIzaSyDwwQc-QENQ4oG9QgjxB3LkPkyeQusCmBM",
    authDomain: "contactform-2bc86.firebaseapp.com",
    databaseURL: "https://contactform-2bc86-default-rtdb.firebaseio.com",
    projectId: "contactform-2bc86",
    storageBucket: "contactform-2bc86.appspot.com",
    messagingSenderId: "271662353150",
    appId: "1:271662353150:web:cff5871dd3ea7656b7b3af"
  };
  firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var phone=getElementVal("phone");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid,phone, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid,phone, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    phone:phone,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};