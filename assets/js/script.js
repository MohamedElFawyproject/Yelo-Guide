
document.getElementById('darkModeToggle').onclick = function() {
  document.body.classList.toggle('dark-mode');
};
<script>
function toggleSupportOptions(card) {
  const next = card.nextElementSibling;
  const steps = next.nextElementSibling;
  next.style.display = next.style.display === 'none' ? 'flex' : 'none';
  steps.style.display = 'none';
}

function showSteps(button, role) {
  const stepsContainer = button.parentElement.nextElementSibling;
  stepsContainer.style.display = 'flex';
  const steps = stepsContainer.querySelectorAll('.step');
  steps.forEach(step => {
    step.style.display = step.dataset.role === role ? 'block' : 'none';
  });
}
</script>
