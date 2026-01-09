//loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
        startTyping();
    }, 2000);
});

function startTyping(){
    const text = "Shaurya";
    const typedElement = document.getElementById('typed-name');
    const cursor = document.getElementById('cursor');
    let index = 0;

    function type(){
        if(index < text.length){
            typedElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }

    setTimeout(type, 500)
}

// about me animation
const aboutContent = document.querySelector('.about-content');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    },
        { threshold: 0.3 }
    );
});

observer.observe(aboutContent)

// animation of interests
const interests = document.querySelectorAll('.interest');
const interestsObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
        });
    },
    { threshold: 0.3 }
);

interests.forEach(interest => interestsObserver.observe(interest));

// detail explanation on click
const popup = document.getElementById('interest-popup');
const popupText = document.getElementById('popup-text');
const skillsGrid = document.getElementById('skills-grid');

const skills = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }
];

interests.forEach(interest => {
    interest.addEventListener('click', () => {
        const detailType = interest.dataset.type;
        
        if(detailType === 'coding'){
            popupText.style.display = 'block';
            popupText.textContent = "My Skills";
            skillsGrid.style.display = 'grid';
            skillsGrid.innerHTML = '';

            skills.forEach(skill => {
                const skillItem = document.createElement('div');
                skillItem.className = 'skill-item';
                skillItem.innerHTML = `
                    <img src="${skill.logo}" alt="${skill.name}">
                    <span>${skill.name}</span>
                `
                skillsGrid.appendChild(skillItem);
            });
        } else{
            popupText.style.display = 'block';
            skillsGrid.style.display = 'none';
            popupText.textContent = interest.dataset.detail;
        }
        
        popup.classList.add('show');
    });
});

// close button functionality
const closeBtn = document.getElementById('close-popup');
closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    popup.classList.remove('show');
});