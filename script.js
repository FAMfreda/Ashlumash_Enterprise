// Set the launch date (1 month from now)
const launchDate = new Date();
launchDate.setMonth(launchDate.getMonth() + 1);

// Update countdown every second
function updateCountdown() {
  const currentDate = new Date();
  const difference = launchDate - currentDate;
  
  // Calculate time units
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  // Display the countdown
  document.getElementById('days').innerText = days.toString().padStart(2, '0');
  document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
  document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

// Initial call
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);

// Handle form submission
document.getElementById('notify-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (emailRegex.test(email)) {
    // Show success message (in real app, you would send this to your backend)
    document.getElementById('success-message').style.display = 'block';
    document.getElementById('error-message').style.display = 'none';
    document.getElementById('email').value = '';
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      document.getElementById('success-message').style.display = 'none';
    }, 5000);
  } else {
    // Show error message
    document.getElementById('error-message').style.display = 'block';
    document.getElementById('success-message').style.display = 'none';
  }
});