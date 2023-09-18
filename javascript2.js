javascript
function hideOnClick(element) {
    element.addEventListener('click', function() {
        element.style.display = 'none';
    });
}
