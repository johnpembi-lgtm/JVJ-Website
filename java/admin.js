const form = document.getElementById("eventForm");
const adminContainer = document.getElementById("adminEvents");
const teamSelect = document.getElementById("team");

function loadEvents() {
    let events = JSON.parse(localStorage.getItem("events")) || {};
    const selectedTeam = teamSelect.value;

    adminContainer.innerHTML = "";

    if (!events[selectedTeam]) return;

    events[selectedTeam].forEach((event, index) => {
        const div = document.createElement("div");
        div.classList.add("event-card");

        div.innerHTML = `
            <h3>${event.title}</h3>
            <p>${event.date}</p>
            <button onclick="deleteEvent('${selectedTeam}', ${index})">
                Supprimer
            </button>
        `;

        adminContainer.appendChild(div);
    });
}

function deleteEvent(team, index) {
    let events = JSON.parse(localStorage.getItem("events")) || {};

    events[team].splice(index, 1);

    localStorage.setItem("events", JSON.stringify(events));

    loadEvents();
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const team = teamSelect.value;
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;

    let events = JSON.parse(localStorage.getItem("events")) || {};

    if (!events[team]) {
        events[team] = [];
    }

    events[team].push({ title, date });

    localStorage.setItem("events", JSON.stringify(events));

    form.reset();
    loadEvents();
});

// Recharger quand on change de team
teamSelect.addEventListener("change", loadEvents);

// Charger au démarrage
loadEvents();