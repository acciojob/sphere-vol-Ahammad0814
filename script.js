function volume_sphere() {
  // Retrieve the radius value entered by the user
  let radius = document.getElementById('radius').value;

  // Validate the input, ensure it is a non-negative number
  radius = parseFloat(radius); // Convert to a float
  if (isNaN(radius) || radius < 0) {
    // If the input is invalid (NaN or negative), set volume to NaN
    document.getElementById('volume').value = 'NaN';
    return;
  }

  // Calculate the volume using the formula: V = (4/3) * π * r^3
  let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Round the volume to 4 decimal places
  volume = volume.toFixed(4);

  // Display the calculated volume in the volume input field
  document.getElementById('volume').value = volume;
}

window.onload = document.getElementById('MyForm').onsubmit = function(event) {
  // Prevent form submission
  event.preventDefault();
  volume_sphere();
};
