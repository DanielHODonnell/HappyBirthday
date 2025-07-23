document.addEventListener('DOMContentLoaded', function() {
    const openModalLink = document.getElementById('openModalLink');
    const myModal = document.getElementById('myModal');
    const closeButton = document.querySelector('.close-button');

    // When the user clicks the image, open the modal
    openModalLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        myModal.style.display = 'flex'; // Use flex to center the modal content
    });

    // When the user clicks on <span> (x), close the modal
    closeButton.addEventListener('click', function() {
        myModal.style.display = 'none';
    });

    // When the user clicks anywhere outside of the modal content, close it
    window.addEventListener('click', function(event) {
        if (event.target == myModal) {
            myModal.style.display = 'none';
        }
    });
});