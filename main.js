
$('.collapse').collapse()

const accordionItems = document.querySelectorAll('.card-header button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  for (i = 0; i < accordionItems.length; i++) {
    accordionItems[i].setAttribute('aria-expanded', 'false');
  }
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

accordionItems.forEach(item => item.addEventListener('click', toggleAccordion));
