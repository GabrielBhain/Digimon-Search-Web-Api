let digimons; // Declare a variável aqui

// Chamada API digimons
async function getDigimonsAPI() {
    const response = await fetch("https://digitalinnovationone.github.io/api-digimon/api/digimon.json");

    return await response.json();
}

//Filtro/Busca dos digimons
async function filtroDigimons(digimonList, digimonId) {
    const digimon = await digimonList.find((monster) => monster.id === digimonId);

    return digimon;
}

// Renderizador
async function renderDigimons(digimon) {
    const imgDigimonElement = document.getElementById("img__Digimon");
    imgDigimonElement.src = digimon.image;

    const txtDigimonElement = document.getElementById("name__Digimon");
    txtDigimonElement.textContent = digimon.name;

    const hpDigimonElement = document.getElementById("hp__int");
    const atkDigimonElement = document.getElementById("atk__int");
    const defDigimonElement = document.getElementById("def__int");

    hpDigimonElement.style.width = digimon.HP + "%";
    atkDigimonElement.style.width = digimon.ATK + "%";
    defDigimonElement.style.width = digimon.DEF + "%";
}

// Função para alterar o Digimon com base no novo ID inserido pelo usuário
async function changeDigimon() {
    const newDigimonId = document.getElementById("digimonId").value;

    if (digimons && newDigimonId !== "") {
        const newDigimon = await filtroDigimons(digimons, parseInt(newDigimonId));

        if (newDigimon) {
            await renderDigimons(newDigimon);
        } else {
            alert("Digimon não encontrado com o ID fornecido.");
        }
    } else {
        alert("Por favor, insira um ID válido.");
    }
}

// Main
async function main() {
    digimons = await getDigimonsAPI(); // Atribua o valor da variável aqui

    const chooseDigimons = await filtroDigimons(digimons, 1);

    await renderDigimons(chooseDigimons);
}
main();
