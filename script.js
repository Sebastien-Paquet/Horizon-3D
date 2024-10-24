document.addEventListener('DOMContentLoaded', () => {
    console.log('The document is fully loaded');
});


window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const materialBoxes = document.querySelectorAll('.material-box');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    materialBoxes.forEach(box => {
        box.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.getAttribute('data-image');
            captionText.innerHTML = this.querySelector('.short-desc').innerHTML;
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const href = this.getAttribute('href');

        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = href;
        }, 1000); // Match the duration of the fade-out animation
    });
});

window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        document.body.classList.remove('fade-out');
    }
});