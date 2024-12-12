
document.querySelector(".login-form").addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value; 
    console.log(email)
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 
  
    if (!emailRegex.test(email)) {
        
      console.log('Please enter a valid email address.');
      return;
    }
  
    if (!passwordRegex.test(password)) {
      console.log('A senha deve ter pelo menos 8 caracteres e conter pelo menos uma letra e um número.');
      return;
    }
  
    // Here you can add your login logic, e.g., sending data to the server
    alert('Login successful!');
  });