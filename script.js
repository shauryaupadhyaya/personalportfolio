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