// Guided Actions - Tooltip Example
document.addEventListener('DOMContentLoaded', function () {
    const homeSection = document.getElementById('home');
  
    homeSection.addEventListener('mouseover', function () {
      showTooltip('Explore more about us!');
    });
  
    homeSection.addEventListener('mouseout', function () {
      hideTooltip();
    });
  
    function showTooltip(text) {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = text;
      document.body.appendChild(tooltip);
  
      const rect = homeSection.getBoundingClientRect();
      tooltip.style.top = rect.top + 'px';
      tooltip.style.left = rect.left + 'px';
    }
  
    function hideTooltip() {
      const tooltip = document.querySelector('.tooltip');
      if (tooltip) {
        tooltip.remove();
      }
    }
  });
  