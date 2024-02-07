function toggleTooltip(button) {
    // Toggle the 'active' class on the button
    button.classList.toggle('active');

    // Toggle the visibility of the tooltip
    var tooltip = button.querySelector('.tooltiptext');
    tooltip.style.visibility = tooltip.style.visibility === 'visible' ? 'hidden' : 'visible';
    tooltip.style.opacity = tooltip.style.opacity === '1' ? '0' : '1';
}