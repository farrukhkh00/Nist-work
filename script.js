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
