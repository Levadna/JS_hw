document.addEventListener("DOMContentLoaded", function(){
    let playersDiv = document.querySelector("#players");
    let teamDiv = document.querySelector("#team");
    let message = document.querySelector("#message");
    let clearBtn = document.querySelector("#clearBtn");
    let saveBtn = document.querySelector("#saveBtn");
    let team = [];

    fetch("players.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(player => {
            let card = document.createElement("div");
            card.className = "card";
            card.draggable = true;
            card.id = player.id;
            card.innerHTML = `
            <img src="${player.image}">
            <div class="info">
                <h2>${player.name}</h2>
                <p><b>Class:</b> ${player.class}</p>
                <p><b>Level:</b> ${player.level}</p>
                <div class="skills">
                    <b>Skills:</b><br>
                    ${player.skills.join(", ")}
                </div>
                <div class="stats">
                    <p>Strength: ${player.stats.strength}</p>
                    <p>Agility: ${player.stats.agility}</p>
                    <p>Intelligence: ${player.stats.intelligence}</p>
                </div>
            </div>
            `;
            card.addEventListener("dragstart", function(event){
                event.dataTransfer.setData("application/json", JSON.stringify(player));
            });
            playersDiv.appendChild(card);
        });
    });

    teamDiv.addEventListener("dragover", function(event){
        event.preventDefault();
        teamDiv.classList.add("hovered");
    });

    teamDiv.addEventListener("dragleave", function(){
        teamDiv.classList.remove("hovered");
    });

    teamDiv.addEventListener("drop", function(event){
        event.preventDefault();
        teamDiv.classList.remove("hovered");
        let data = event.dataTransfer.getData("application/json");
        let player = JSON.parse(data);
        message.textContent = "";
        if(team.length >= 3)
        {
            message.textContent = "Team is full!";
            alert("Team is full!");
            return;
        }
        let exists = team.find(p => p.id === player.id);
        if(exists)
        {
            message.textContent = "This character is already in team!";
            alert("This character is already in team!");
            return;
        }
        if( !player.skills.includes("Magic") && !player.skills.includes("Leadership"))
        {
            message.textContent = "Character needs Magic or Leadership skill!";
            alert("Character needs Magic or Leadership skill!");
            return;
        }
        team.push(player);
        renderTeam();
    });

    function renderTeam()
    {
        let title = document.createElement("div");
        title.style.width = "100%";
        teamDiv.appendChild(title);
        teamDiv.innerHTML = "<h2>Team</h2>";
        team.forEach(player => {
            let div = document.createElement("div");
            div.className = "teamCard";
            div.innerHTML = `
            <img src="${player.image}">
            <h3>${player.name}</h3>
            <p>Level: ${player.level}</p>
            <p>${player.skills.join(", ")}</p>
            `;
            div.addEventListener("dblclick", function(){
                team = team.filter(p => p.id !== player.id);
                renderTeam();
            });
            
            teamDiv.appendChild(div);
        });
    }
    saveBtn.addEventListener("click", function(){
        localStorage.setItem("team", JSON.stringify(team));
        message.textContent = "Team saved!";
    });
    clearBtn.addEventListener("click", function(){
        team = [];
        localStorage.removeItem("team");
        renderTeam();
        message.textContent = "Team cleared!";
    });

    let savedTeam = localStorage.getItem("team");
    if(savedTeam)
    {
        team = JSON.parse(savedTeam);
        renderTeam();
    }
});