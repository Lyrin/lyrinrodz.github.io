function switchTab(btn, id) {
  // Remove active class from all tab buttons
  document.querySelectorAll('.tab-btn').forEach(function(b) {
    b.classList.remove('active');
  });

  // Remove active class from all tab panels
  document.querySelectorAll('.tab-panel').forEach(function(p) {
    p.classList.remove('active');
  });

  // Set clicked button as active
  btn.classList.add('active');

  // Show the matching panel
  document.getElementById('tab-' + id).classList.add('active');
}
