document.addEventListener('DOMContentLoaded', function() {
  
  // Create loading overlay
  const loadingOverlay = document.createElement('div');
  loadingOverlay.classList.add('loading-overlay');
  
  const loadingText = document.createElement('div');
  loadingText.classList.add('loading-text');
  loadingText.textContent = 'INITIALIZING SYSTEM...';
  
  const progressBarContainer = document.createElement('div');
  progressBarContainer.classList.add('progress-bar');
  
  const progressBar = document.createElement('div');
  progressBar.classList.add('progress');
  
  progressBarContainer.appendChild(progressBar);
  loadingOverlay.appendChild(loadingText);
  loadingOverlay.appendChild(progressBarContainer);
  
  document.body.appendChild(loadingOverlay);
  
  // Create CRT effect
  const crtEffect = document.createElement('div');
  crtEffect.classList.add('crt-effect');
  document.body.appendChild(crtEffect);
  
  // Remove loading overlay after animation
  setTimeout(function() {
    loadingOverlay.style.opacity = '0';
    loadingOverlay.style.transition = 'opacity 0.5s';
    
    setTimeout(function() {
      loadingOverlay.remove();
    }, 500);
    
    // Type writing effect for hero titles
    const heroTitles = document.querySelectorAll('.hero .glitch');
    heroTitles.forEach(title => {
      const text = title.textContent;
      title.setAttribute('data-text', text);
    });
    
  }, 3000);
  
  // Terminal text animation
  const terminalCommands = document.querySelectorAll('.command');
  
  terminalCommands.forEach((command, index) => {
    const originalText = command.textContent;
    command.textContent = '';
    
    setTimeout(() => {
      let i = 0;
      const typeInterval = setInterval(() => {
        command.textContent += originalText[i];
        i++;
        
        if (i === originalText.length) {
          clearInterval(typeInterval);
        }
      }, 50);
    }, 3000 + (index * 500));
  });
  
  // Add "active" class to current page in navigation
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation || 
        (currentLocation.endsWith('/') && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });
  
  // Random glitch effect for various elements
  const glitchElements = document.querySelectorAll('.review-header h2, .interview-header h2, .panel-header h2');
  
  glitchElements.forEach(element => {
    setInterval(() => {
      if (Math.random() > 0.95) {
        const originalText = element.textContent;
        element.textContent = scrambleText(originalText);
        
        setTimeout(() => {
          element.textContent = originalText;
        }, 200);
      }
    }, 3000);
  });
  
  function scrambleText(text) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = '';
    
    for (let i = 0; i < text.length; i++) {
      if (Math.random() > 0.7) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      } else {
        result += text[i];
      }
    }
    
    return result;
  }
  
  // Easter egg: Konami code
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiCodePosition = 0;
  
  document.addEventListener('keydown', function(e) {
    const key = e.key;
    const requiredKey = konamiCode[konamiCodePosition];
    
    if (key === requiredKey) {
      konamiCodePosition++;
      
      if (konamiCodePosition === konamiCode.length) {
        activateEasterEgg();
        konamiCodePosition = 0;
      }
    } else {
      konamiCodePosition = 0;
    }
  });
  
  function activateEasterEgg() {
    document.documentElement.style.setProperty('--primary', '#ff0000');
    document.documentElement.style.setProperty('--secondary', '#ff00ff');
    
    setTimeout(() => {
      document.documentElement.style.setProperty('--primary', '#0f0');
      document.documentElement.style.setProperty('--secondary', '#0cc');
    }, 5000);
    
    alert('ADMIN MODE ACTIVATED: GAINING ROOT ACCESS...');
  }
});