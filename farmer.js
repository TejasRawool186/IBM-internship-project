// farmer.js

document.getElementById('farmerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form data
  const name = document.getElementById('name').value.trim();
  const location = document.getElementById('location').value.trim();
  const produce = document.getElementById('produce').value.trim();
  const quantity = document.getElementById('quantity').value;
  const price = document.getElementById('price').value;
  const phone = document.getElementById('phone').value.trim();

  // Basic validation
  if (!name || !location || !produce || quantity <= 0 || price <= 0 || phone.length !== 10) {
    alert("Please fill all fields correctly.");
    return;
  }

  // Simulate successful form submission
  document.getElementById('successMessage').classList.remove('hidden');
  document.getElementById('farmerForm').reset();
});
