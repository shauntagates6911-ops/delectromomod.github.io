// ⚡️ TAB SWITCHER LOGIC
function switchAuthTab(tab) {
  const loginForm = document.getElementById('loginForm');
  const regForm = document.getElementById('registerForm');
  const tabLogin = document.getElementById('tabLogin');
  const tabReg = document.getElementById('tabRegister');

  if (tab === 'login') {
    loginForm.classList.remove('hidden');
    regForm.classList.add('hidden');
    tabLogin.classList.add('active');
    tabReg.classList.remove('active');
  } else {
    loginForm.classList.add('hidden');
    regForm.classList.remove('hidden');
    tabLogin.classList.remove('active');
    tabReg.classList.add('active');
  }
}

// 🚀 LOGIN SUBMIT HANDLER
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('loginUser').value;
  
  // Save local session state
  localStorage.setItem('delectromo_user', username);
  alert(`⚡️ SIGN IN SUCCESS! Welcome back to DelectromoMod, ${username}!`);
  window.location.href = 'editor.html';
});

// 📝 REGISTER SUBMIT HANDLER
document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('regUser').value;
  
  localStorage.setItem('delectromo_user', username);
  alert(`⚡️ ACCOUNT CREATED! Full developer cloud access granted to ${username}!`);
  window.location.href = 'editor.html';
});
