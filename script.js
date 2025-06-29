const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
});

const navBar = document.querySelector("nav");
const navLinks = document.querySelector(".nav-links");
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const screenHeight = window.innerHeight;
    // const scrollHeight = document.documentElement.scrollHeight;
    if (scrollY >= 100) {
        if (scrollY > lastScroll) {
            navBar.classList.add("hide");
        } else {
            navBar.classList.remove("hide");
        }
    } else {
        navBar.classList.remove('hide')
    }

    lastScroll = scrollY;
});

const hamburger = document.getElementById("hamburger-menu");

hamburger.addEventListener('click', () => {
    const isActive = hamburger.classList.toggle('active');

    navLinks.classList.toggle('open', isActive);
});

document.addEventListener('click', (e) => {
    if (navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
    }
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
    }
})

setTimeout(() => {
    document.querySelector('.loader').style.display = "none"
}, 4000)

const hexTime = gsap.timeline({ defaults: { ease: "power1.inOut", duration: 1 } });

hexTime.to("#hexagonLogo polygon", {
    strokeDashoffset: 0,
    repeat: 1,
    yoyo: true,
}).fromTo(".loader span", { opacity: 0, fontSize: '18px' }, { opacity: 1, fontSize: '38px' },
    "-=0.5").to('.loader', {
        repeat: -1,
        ease: Power2.easeInOut,
        yoyo: true
    }).to(".loader", {
        display: 'none'
    }, "-=1")


// function fadeIcon() {

//     const t1 = gsap.timeline();

//     t1.to('.icon #logo', {
//         x: -2,
//         y: -4,
//     })
//         .to('.icon #logo', {
//             filter: "drop-shadow(4px 0px 0px #eee)",
//             duration: 0.6,
//         }, "-=0.5")
// }

// document.querySelector('.icon #logo').addEventListener('mouseover', fadeIcon)



// const container = document.querySelector('.ripple-container');
// let lastTime = 0;
// const cooldown = 300; // ms between ripples

// document.addEventListener("mousemove", (e) => {
//     // const now = Date.now();
//     // if (now - lastTime < cooldown) return;

//     const ripple = document.createElement("div");
//     ripple.className = "ripple";
//     ripple.style.left = `${e.clientX}px`;
//     ripple.style.top = `${e.clientY}px`;
//     container.appendChild(ripple);

//     setTimeout(() => ripple.remove(), 1200);
//     // lastTime = now;
// });

//   gsap.utils.toArray('.section').forEach(section => {

gsap.utils.toArray('.fadeIn').forEach(fade => {
    gsap.fromTo(fade,
        { y: 80, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1.2,
            scrollTrigger: {
                trigger: fade,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            ease: "power2.out",
        }
    );
})