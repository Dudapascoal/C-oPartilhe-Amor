// ========================================
// MODAL DINÂMICO DOS PETS
// ========================================

// CARDS
const petCards = document.querySelectorAll(".pet-card");

// MODAL
const modalPet = document.getElementById("modalPet");
const closeModal = document.getElementById("closeModal");

// ELEMENTOS DO MODAL

const modalImg = document.getElementById("modalImg");
const modalOng = document.getElementById("modalOng");
const modalNome = document.getElementById("modalNome");
const modalGenero = document.getElementById("modalGenero");

const modalPeso = document.getElementById("modalPeso");
const modalIdade = document.getElementById("modalIdade");
const modalChip = document.getElementById("modalChip");

const modalEspecie = document.getElementById("modalEspecie");
const modalPorte = document.getElementById("modalPorte");
const modalRaca = document.getElementById("modalRaca");

const modalLocal = document.getElementById("modalLocal");
const modalSobre = document.getElementById("modalSobre");

// ========================================
// ABRIR MODAL
// ========================================

petCards.forEach(card => {

  card.addEventListener("click", () => {

    // PEGAR DADOS DO CARD

    const img = card.dataset.img;
    const ong = card.dataset.ong;
    const nome = card.dataset.nome;
    const genero = card.dataset.genero;

    const peso = card.dataset.peso;
    const idade = card.dataset.idade;
    const chip = card.dataset.microchip;

    const especie = card.dataset.especie;
    const porte = card.dataset.porte;
    const raca = card.dataset.raca;

    const local = card.dataset.local;
    const sobre = card.dataset.sobre;

    // INSERIR DADOS NO MODAL

    modalImg.src = img;
    modalOng.textContent = ong;
    modalNome.textContent = nome;

    modalPeso.textContent = peso;
    modalIdade.textContent = idade;
    modalChip.textContent = chip;

    modalEspecie.textContent = especie;
    modalPorte.textContent = porte;
    modalRaca.textContent = raca;

    modalLocal.textContent = local;
    modalSobre.textContent = sobre;

    // ========================================
    // GÊNERO
    // ========================================

    if(genero === "mars"){

      modalGenero.className = "fa-solid fa-mars";
      modalGenero.style.color = "#003da6";

    }else if(genero === "venus"){

      modalGenero.className = "fa-solid fa-venus";
      modalGenero.style.color = "#ff7fcc";

    }else if(genero === "ambos"){

      modalGenero.className = "fa-solid fa-venus-mars";
      modalGenero.style.color = "#ba9261";

    }

    // ========================================
    // ABRIR MODAL
    // ========================================

    modalPet.classList.add("active");

  });

});

// ========================================
// FECHAR MODAL NO X
// ========================================

closeModal.addEventListener("click", () => {

  modalPet.classList.remove("active");

});

// ========================================
// FECHAR AO CLICAR FORA
// ========================================

modalPet.addEventListener("click", (e) => {

  if(e.target === modalPet){

    modalPet.classList.remove("active");

  }

});

// ========================================
// FECHAR COM ESC
// ========================================

document.addEventListener("keydown", (e) => {

  if(e.key === "Escape"){

    modalPet.classList.remove("active");

  }

});