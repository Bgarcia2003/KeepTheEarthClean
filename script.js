function toggleInfo(id, button) {
  var moreText = document.getElementById(id);
  if (moreText.classList.contains('hidden')) {
    moreText.classList.remove('hidden');
    button.textContent = "Show Less";
  } else {
    moreText.classList.add('hidden');
    button.textContent = "Learn More";
  }
}
