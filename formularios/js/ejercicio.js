document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('[name="password"]')
    const toggle = document.querySelector('#show-password')
  
    toggle.addEventListener('click', (event) => {
      const btnSpan = event.target
  
      if(btnSpan.innerHTML === '🐵') {
        input.setAttribute('type', 'text')
        btnSpan.innerHTML = '🙈'
      }
      else {
        input.setAttribute('type', 'password')
        btnSpan.innerHTML = '🐵'
      }
    })
  })