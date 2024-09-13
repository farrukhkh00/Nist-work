document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion-header');
    
    headers.forEach(header => {
        header.addEventListener('click', function () {
            const body = this.nextElementSibling;
            const isOpen = body.style.display === 'block';

            // Close all other accordion items
            document.querySelectorAll('.accordion-body').forEach(item => {
                item.style.display = 'none';
            });
            document.querySelectorAll('.accordion-header').forEach(header => {
                header.classList.remove('open');
            });

            // Toggle the current accordion item
            if (!isOpen) {
                body.style.display = 'block';
                this.classList.add('open');
            } else {
                body.style.display = 'none';
                this.classList.remove('open');
            }
        });
    });
});

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
    

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-item');

    // Activate the 'All' button by default and show all items
    const allButton = document.querySelector('.filter-btn[data-filter="all"]');
    allButton.classList.add('active');
    items.forEach(item => item.classList.add('show'));

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Remove 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');

            // Filter items based on the selected filter
            items.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                }
            });
        });
    });
});
