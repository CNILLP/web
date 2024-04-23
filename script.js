// script.js
document.getElementById('purchaseOrderForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var partyName = document.getElementById('partyName').value;
  var address = document.getElementById('address').value;
  var contactPerson = document.getElementById('contactPerson').value;
  var mobileNumber = document.getElementById('mobileNumber').value;
  var gstNumber = document.getElementById('gstNumber').value;
  
  // Display output on the webpage
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = `
    <h2>Purchase Order Summary</h2>
    <p><strong>Party Name:</strong> ${partyName}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Contact Person:</strong> ${contactPerson}</p>
    <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
    <p><strong>GST No:</strong> ${gstNumber}</p>
    <!-- Add additional purchase order details here -->
  `;
  
  // Optional: You can perform further actions here, such as sending the data to a server
  
  // Optional: Reset the form
  document.getElementById('purchaseOrderForm').reset();
});
