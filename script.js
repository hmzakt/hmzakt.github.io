const target = document.querySelector(".change");
const arr = ["developer.", "programmer.", "designer."];
let wordIndex = 0;
let i = 0;

function write() {
    const currentWord = arr[wordIndex];
    target.innerHTML = currentWord.slice(0, i);

    if (i === currentWord.length) {
        setTimeout(function () {
            wordIndex = (wordIndex + 1) % arr.length;
            i = 0;
            write();
        }, 1000);
    } else {
        i++;
        setTimeout(write, 175);
    }
}
write();
// target.style.backgroundColor = "#C0D9C9"; 
target.style.color = "#1B0330"

document.addEventListener("DOMContentLoaded", function () {
    const flyInElements = document.querySelectorAll('.fly-in');

    const observerOptions = {
        root: null, 
        rootMargin: '0px', 
        threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fly-in-visible'); 
                observer.unobserve(entry.target); 
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    flyInElements.forEach(element => observer.observe(element));
});
