// script.js
document.getElementById('dataForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var age = document.getElementById('age').value;
  var message = document.getElementById('message').value;
  
  // Display output on the webpage
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = `
    <h2>Output</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
  
  // Optional: You can perform further actions here, such as sending the data to a server
  
  // Optional: Reset the form
  document.getElementById('dataForm').reset();
});
