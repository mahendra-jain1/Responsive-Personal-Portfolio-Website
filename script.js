const navlinks = document.querySelectorAll('header nav a');
const logolink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon'); // single element
const navbar = document.querySelector('header nav')


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});



const activepage = () => {
const header = document.querySelector('header');

header.classList.remove('active');
setTimeout(() => {
    header.classList.add('active');
},1100)

    navlinks.forEach(link => {
        link.classList.remove("active");
    });

    sections.forEach(section => {
        section.classList.remove("active");
    });
   
}


navlinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activepage();

            link.classList.add("active");

            setTimeout(() => {
                sections[idx].classList.add('active'); // ✅ fixed
            }, 1100);
        }
    });
});


logolink.addEventListener('click', () => {
    if (!navlinks[0].classList.contains('active')) {
        activepage();

        navlinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});



const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    resumeBtns.forEach(b => b.classList.remove('active'));

    // Add active to clicked button
    btn.classList.add('active');

    // Remove active from all details
    resumeDetails.forEach(detail => detail.classList.remove('active'));

    // Add active to matching detail
    resumeDetails[idx].classList.add('active');
  });
});

