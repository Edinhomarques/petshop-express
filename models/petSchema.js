let pets = [{ nome: "doug" }, { nome: "costelinha" }];

const listarPets = () => {
  let conteudo = "";
  for (let pet of pets) {
    conteudo += `
    <div style="background-color: grey">
    <p style="font-size: 18px; color: purple">Nome: ${pet.nome}</p>
    
    </div></br>`;
  }

  return conteudo;
};

const adicionarPet = novoPet => {
  return pets.push(novoPet);
};

const buscarPet = nomePet => {
  let petsEncontrados = pets.filter(pet => pet.nome == nomePet);

  return petsEncontrados;
};

module.exports = { listarPets, adicionarPet, buscarPet };