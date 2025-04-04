let text = new SplitType('.staggerText');

const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log("entry");
        if (entry.isIntersecting) {
            gsap.fromTo(text.chars, {y: '100%'}, {y: '0%', stagger: 0.03, delay: '0.2'});
        } else {
            gsap.to(text.chars, {y: '0%', duration: 0});
        }
    });
});

const staggerElements = document.querySelectorAll('.staggerText');
staggerElements.forEach((e1) => staggerObserver.observe(e1));




let text2 = new SplitType('.staggerText2');

const staggerObserver2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log("entry");
        if (entry.isIntersecting) {
            gsap.fromTo(text2.chars, {y: '100%'}, {y: '0%', stagger: 0.03, delay: '0.2'});
        } else {
            gsap.to(text2.chars, {y: '0%', duration: 0});
        }
    });
});

const staggerElements2 = document.querySelectorAll('.staggerText2');
staggerElements2.forEach((e1) => staggerObserver2.observe(e1));


let text3 = new SplitType('.staggerText3');

const staggerObserver3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log("entry");
        if (entry.isIntersecting) {
            gsap.fromTo(text3.chars, {y: '100%'}, {y: '0%', stagger: 0.03, delay: '0.2'});
        } else {
            gsap.to(text3.chars, {y: '0%', duration: 0});
        }
    });
});

const staggerElements3 = document.querySelectorAll('.staggerText3');
staggerElements3.forEach((e1) => staggerObserver3.observe(e1));




const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("entry")
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e1) => observer.observe(e1));
