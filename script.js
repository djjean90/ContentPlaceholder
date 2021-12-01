const header = document.querySelector('.card-header');
const title = document.querySelector('.card-title');
const excerpt = document.querySelector('.excerpt');
const authorName = document.querySelector('.name');
const date = document.querySelector('.date');
const profileImg = document.querySelector('.profile-img');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgsText = document.querySelectorAll('.animated-bg-text');




function getData () {
    header.innerHTML = ' <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';
    title.innerHTML = 'Lorem ipsum dolor sit amet.';

    excerpt.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, ipsa.';
    profileImg.innerHTML = ' <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';
    authorName.innerHTML = 'John Doe';
    date.innerHTML = 'Oct 08, 2020';

    animatedBgs.forEach( bg => {
        bg.classList.remove('.animated-bg');
    });

    animatedBgsText.forEach( bgText => {
        bgText.classList.remove('.animated-bg-text');
    });

}

setTimeout(getData, 2000);