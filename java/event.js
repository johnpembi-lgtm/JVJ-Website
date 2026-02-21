const teamName = document.body.dataset.team;

const defaultEvents = {
    worship: [
        { title: "Répétition Louange", date: "Chaque mercredi - 18h" }
    ],
    media: [
        { title: "Formation montage vidéo", date: "10 Avril - 16h" }
    ],
    intercession: [
        { title: "Prière hebdomadaire", date: "Chaque vendredi - 19h" }
    ]
};

let storedEvents = JSON.parse(localStorage.getItem("events")) || {};

const container = document.getElementById("eventsContainer");

let allEvents = [
    ...(defaultEvents[teamName] || []),
    ...(storedEvents[teamName] || [])
];

allEvents.forEach((event, index) => {
    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
        <h3>${event.title}</h3>
        <p>${event.date}</p>
    `;

    container.appendChild(card);
});

console.log("Team:", teamName);
console.log("Stored:", storedEvents);