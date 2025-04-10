// flip.js

// Toggle the login modal
function toggleLogin() {
    const modal = document.getElementById('loginModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
  }
  
  // Dummy login functionality (Just for frontend demo)
  function handleLogin(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === "user" && password === "password") {
      alert(`Welcome, ${username}!`);
      toggleLogin();
    } else {
      alert("Invalid credentials, try again 😢");
    }
  }
  