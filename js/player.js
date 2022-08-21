const player = [];

// products-player

function displayPlayername() {


    const playerContainer = document.getElementById("total-players");
    playerContainer.textContent = '';

    for (let i = 0; i < player.length; i++) {
        if(i>4){
            alert('Only five player is allowed');
            return;
        }

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${player[i].plName}</td>
        `;
        playerContainer.appendChild(tr);
    }
  
}

function addToplayer(element) {
    const plName = element.parentNode.parentNode.parentNode.children[0].innerText;

    const pl = {
        plName: plName,
    }

    player.push(pl);

    displayPlayername();
}

