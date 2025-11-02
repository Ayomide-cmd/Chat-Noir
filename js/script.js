const slider = document.getElementById('positionSlider');
const leftPupil = document.getElementById('leftPupil');
const rightPupil = document.getElementById('rightPupil');
const valueDisplay = document.getElementById('valueDisplay');

slider.addEventListener('input', function(e) {
    const val = e.target.value;
    valueDisplay.textContent = 'Position: ' + val;
    
    const offset = ((val - 50) / 50) * 8;
    
    leftPupil.style.transform = 'translate(calc(-50% + ' + offset + 'px), -50%)';
    rightPupil.style.transform = 'translate(calc(-50% + ' + offset + 'px), -50%)';
});
