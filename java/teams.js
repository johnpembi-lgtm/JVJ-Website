const teams = [
    {
        name: "Team Worship",
        description: "Responsable de la louange et de l'adoration.",
        link: "teams/worship.html"
    },
    {
        name: "Team Media & Communication",
        description: "Gestion des réseaux et communication digitale.",
        link: "teams/media.html"
    },
    {
        name: "Team Intercession",
        description: "Prière et soutien spirituel du groupe.",
        link: "teams/intercession.html"
    }
];

const container = document.getElementById("teamContainer");

teams.forEach(team => {
    const card = document.createElement("div");
    card.classList.add("team-card");

    card.innerHTML = `
        <h3>${team.name}</h3>
        <p>${team.description}</p>
        <a href="${team.link}" class="team-btn">Voir plus</a>
    `;

    container.appendChild(card);
});