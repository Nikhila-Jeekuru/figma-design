document.getElementById('menu-toggle').addEventListener('change', function() {
    var menuItems = document.querySelector('.menu-items');
    if (this.checked) {
        menuItems.style.display = 'block';
    } else {
        menuItems.style.display = 'none';
    }
});
