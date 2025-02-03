
function sendEmail(e) {
    e.preventDefault();
    let params = {
        name : document.getElementById("name").value,
        address : document.getElementById("address").value,
        email : document.getElementById("email").value,
        number : document.getElementById("number").value,
    }
    emailjs.send("service_1tlzugi", "template_qn88lxv", params).then(alert("Email sent!!"));
}

gsap.registerPlugin(ScrollTrigger);

navtimeline = gsap.timeline();

navtimeline.from(".navbar", {
    y: -70,
    opacity: 0, 
    delay: 0.4,
    duration: 0.3,
});
navtimeline.to(".navbar a", {
    opacity: 1,
    duration: 0.2,
    stagger: 0.15,
});
navtimeline.from(".hero", {
    opacity: 0,
    y: -300,
    duration: 0.4,
    stagger: 0.2,
});
navtimeline.to(".BookBtn", {
    opacity: 1,
    duration: 0.4,
});

gsap.from("#ser1", {
    opacity: 0,
    scale: 0.5,
    scrollTrigger: {
        trigger: "#ser1",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
    }
});

gsap.from("#ser2", {
    opacity: 0,
    scale: 0.5,
    scrollTrigger: {
        trigger: "#ser2",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
    }
});

gsap.from("#ser3", {
    opacity: 0,
    scale: 0.5,
    scrollTrigger: {
        trigger: "#ser3",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
    }
});

gsap.from("#ser4", {
    opacity: 0,
    scale: 0.5,
    scrollTrigger: {
        trigger: "#ser4",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
    }
});

gsap.from("#bookform", {
    opacity: 0.8,
    scale: 0.7,
    scrollTrigger: {
        trigger: "#bookform",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
    }
});

gsap.from("#ourser", {
    opacity: 0,
    x:-300,
    scrollTrigger: {
        trigger: "#ourser",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
    }
});
gsap.from("#ourserdash", {
    opacity: 0,
    x:300,
    scrollTrigger: {
        trigger: "#ourserdash",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
    }
});

gsap.from("#bookt", {
    opacity: 0,
    x:-300,
    scrollTrigger: {
        trigger: "#bookt",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
    }
});
gsap.from("#booktdash", {
    opacity: 0,
    x:300,
    scrollTrigger: {
        trigger: "#booktdash",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
    }
});