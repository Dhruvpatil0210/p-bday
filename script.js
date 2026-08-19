/* ========================= */
/* OPEN CARD */
/* ========================= */

function openCard() {

    document
        .getElementById("page1")
        .classList.remove("active");

    document
        .getElementById("page2")
        .classList.add("active");
}


/* ========================= */
/* CELEBRATE */
/* ========================= */

function celebrate() {

    createConfetti();

    startF1Race();

    showCelebration();
}


/* ========================= */
/* CONFETTI */
/* ========================= */

function createConfetti() {

    const container =
        document.getElementById(
            "confetti-container"
        );

    container.innerHTML = "";

    const colors = [
        "#8b5cf6",
        "#9b6cff",
        "#a78bfa",
        "#c4b5fd",
        "#ddd6fe",
        "#7c3aed",
        "#ffffff"
    ];

    for (let i = 0; i < 250; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.backgroundColor =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        const size =
            Math.random() * 8 + 5;

        confetti.style.width =
            size + "px";

        confetti.style.height =
            size * 1.7 + "px";

        confetti.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        confetti.style.animationDelay =
            Math.random() * 0.8 + "s";

        container.appendChild(confetti);
    }
}


/* ========================= */
/* F1 RACE */
/* ========================= */

function startF1Race() {

    const race =
        document.getElementById(
            "f1-container"
        );

    race.classList.remove("racing");

    /* Restart animation */

    void race.offsetWidth;

    race.classList.add("racing");
}


/* ========================= */
/* CELEBRATION TEXT */
/* ========================= */

function showCelebration() {

    const message =
        document.getElementById(
            "celebration-message"
        );

    message.classList.remove("show");

    /* Restart animation */

    void message.offsetWidth;

    message.classList.add("show");
}