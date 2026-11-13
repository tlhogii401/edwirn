const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        const icon = menuToggle.querySelector("i");

        if (icon) {
            icon.classList.toggle("fa-bars", !isOpen);
            icon.classList.toggle("fa-xmark", isOpen);
        }

    });

    document.querySelectorAll("#nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    });

}

const heroVideo = document.getElementById("hero-video");

if (heroVideo) {

    const videoPlaylist = [
        "videos/video1.mp4",
        "videos/video2.mp4",
        "videos/video3.mp4"
    ];

    let currentVideo = 0;

    heroVideo.controls = false;
    heroVideo.muted = true;
    heroVideo.disablePictureInPicture = true;
    heroVideo.setAttribute("controlsList", "nodownload noplaybackrate nofullscreen");

    heroVideo.addEventListener("contextmenu", function (event) {
        event.preventDefault();
    });

    heroVideo.addEventListener("ended", function () {

        currentVideo = (currentVideo + 1) % videoPlaylist.length;

        heroVideo.src = videoPlaylist[currentVideo];

        heroVideo.load();

        heroVideo.play().catch(function (error) {
            console.log("Video playback could not start:", error);
        });

    });

    heroVideo.addEventListener("error", function () {
        console.log("There was a problem loading the video.");
    });

}
