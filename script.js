// script.js
document.getElementById('purchaseOrderForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var partyName = document.getElementById('partyName').value;
  
  // Display output on the webpage
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = `
    <h2>Purchase Order Summary</h2>
    <p><strong>Party Name:</strong> ${partyName}</p>
    <!-- Add additional purchase order details here -->
  `;
  
  // Optional: You can perform further actions here, such as sending the data to a server
  
  // Optional: Reset the form
  document.getElementById('purchaseOrderForm').reset();
});
