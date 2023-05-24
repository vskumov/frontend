const switchBtn = document.querySelector('#toggle');
const body = document.body;

// swithBtn.onclick = () => {
//     if(body.classList.contains('light-mode')) {
//         body.classList.replace('light-mode', 'dark-mode');
//         localStorage.setItem('mode', 'dark')
//     } else {
//         body.classList.replace('dark-mode', 'light-mode');
//         localStorage.setItem('mode', 'light')
//     }
// };

// const mode = localStorage.getItem('mode');
// if(mode === 'dark') body.classList.replace('light-mode', 'dark-mode');


switchBtn.onclick = () => {
    if (body.classList.contains('light-mode')) {
      body.classList.replace('light-mode', 'dark-mode');
      switchBtn.classList.replace('la-toggle-on', 'la-toggle-off');
      localStorage.setItem('mode', 'dark');
    } else {
      body.classList.replace('dark-mode', 'light-mode');
      switchBtn.classList.replace('la-toggle-off', 'la-toggle-on');
      localStorage.setItem('mode', 'light');
    }
  };
  
  const mode = localStorage.getItem('mode');
  if (mode === 'dark') {
    body.classList.replace('light-mode', 'dark-mode');
    switchBtn.classList.replace('la-toggle-on', 'la-toggle-off');
  }
  