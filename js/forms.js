
/* =========================
   ABRIR / FECHAR MODAL
========================= */

const abrirFormulario = document.getElementById("abrirFormulario");
const fecharFormulario = document.getElementById("fecharFormulario");
const modalAdocao = document.getElementById("modalAdocao");

abrirFormulario.addEventListener("click", (e) => {
  e.preventDefault();

  modalAdocao.classList.add("active");
});

fecharFormulario.addEventListener("click", () => {
  modalAdocao.classList.remove("active");
});

window.addEventListener("click", (e) => {

  if(e.target === modalAdocao){
    modalAdocao.classList.remove("active");
  }

});

/* =========================
   ETAPAS FORMULÁRIO
========================= */

const steps = document.querySelectorAll(".step");
const formSteps = document.querySelectorAll(".form-step");

const nextBtns = document.querySelectorAll(".next");
const prevBtns = document.querySelectorAll(".prev");

let currentStep = 0;

/* MOSTRA ETAPA */
function showStep(index){

  formSteps.forEach((step) => {
    step.classList.remove("active");
  });

  steps.forEach((step) => {
    step.classList.remove("active");
  });

  formSteps[index].classList.add("active");

  for(let i = 0; i <= index; i++){
    steps[i].classList.add("active");
  }

}

/* AVANÇAR */
nextBtns.forEach((btn) => {

  btn.addEventListener("click", () => {

    if(currentStep < formSteps.length - 1){

      currentStep++;

      showStep(currentStep);

    }

  });

});

/* VOLTAR */
prevBtns.forEach((btn) => {

  btn.addEventListener("click", () => {

    if(currentStep > 0){

      currentStep--;

      showStep(currentStep);

    }

  });

});

/* =========================
   ESTADOS E CIDADES
========================= */

const estadoSelect = document.getElementById("estado");
const cidadeSelect = document.getElementById("cidade");

const cidadesPorEstado = {

  "AC": [
    "Rio Branco",
    "Cruzeiro do Sul",
    "Sena Madureira"
  ],

  "AL": [
    "Maceió",
    "Arapiraca",
    "Palmeira dos Índios"
  ],

  "AP": [
    "Macapá",
    "Santana",
    "Laranjal do Jari"
  ],

  "AM": [
    "Manaus",
    "Parintins",
    "Itacoatiara"
  ],

  "BA": [
    "Salvador",
    "Feira de Santana",
    "Vitória da Conquista"
  ],

  "CE": [
    "Fortaleza",
    "Caucaia",
    "Juazeiro do Norte"
  ],

  "DF": [
    "Brasília",
    "Taguatinga",
    "Ceilândia"
  ],

  "ES": [
    "Vitória",
    "Vila Velha",
    "Serra"
  ],

  "GO": [
    "Goiânia",
    "Anápolis",
    "Aparecida de Goiânia"
  ],

  "MA": [
    "São Luís",
    "Imperatriz",
    "Caxias"
  ],

  "MT": [
    "Cuiabá",
    "Várzea Grande",
    "Rondonópolis"
  ],

  "MS": [
    "Campo Grande",
    "Dourados",
    "Três Lagoas"
  ],

  "MG": [
    "Belo Horizonte",
    "Uberlândia",
    "Contagem"
  ],

  "PA": [
    "Belém",
    "Ananindeua",
    "Santarém"
  ],

  "PB": [
    "João Pessoa",
    "Campina Grande",
    "Santa Rita"
  ],

  "PR": [
    "Curitiba",
    "Londrina",
    "Maringá"
  ],

  "PE": [
    "Recife",
    "Olinda",
    "Jaboatão dos Guararapes"
  ],

  "PI": [
    "Teresina",
    "Parnaíba",
    "Picos"
  ],

  "RJ": [
    "Rio de Janeiro",
    "Niterói",
    "Duque de Caxias"
  ],

  "RN": [
    "Natal",
    "Mossoró",
    "Parnamirim"
  ],

  "RS": [
    "Porto Alegre",
    "Caxias do Sul",
    "Pelotas"
  ],

  "RO": [
    "Porto Velho",
    "Ji-Paraná",
    "Ariquemes"
  ],

  "RR": [
    "Boa Vista",
    "Rorainópolis",
    "Caracaraí"
  ],

  "SC": [
    "Florianópolis",
    "Joinville",
    "Blumenau"
  ],

  "SP": [
    "São Paulo",
    "Diadema",
    "Santo André",
    "São Bernardo do Campo",
    "Osasco",
    "Campinas",
    "Guarulhos",
    "Santos"
  ],

  "SE": [
    "Aracaju",
    "Nossa Senhora do Socorro",
    "Lagarto"
  ],

  "TO": [
    "Palmas",
    "Araguaína",
    "Gurupi"
  ]

};

/* TROCA CIDADES */
estadoSelect.addEventListener("change", () => {

  const estado = estadoSelect.value;

  cidadeSelect.innerHTML =
    `<option value="">Escolha a cidade</option>`;

  if(cidadesPorEstado[estado]){

    cidadesPorEstado[estado].forEach((cidade) => {

      const option = document.createElement("option");

      option.value = cidade;
      option.textContent = cidade;

      cidadeSelect.appendChild(option);

    });

  }

});

/* =========================
   ENVIO DO FORMULÁRIO
========================= */

const formAdocao = document.getElementById("formAdocao");

formAdocao.addEventListener("submit", function(event){

  /* IMPEDE RELOAD */
  event.preventDefault();

  /* CAPTURA DADOS */
  const nome =
    document.querySelector('input[placeholder="Seu nome completo"]').value;

  const email =
    document.querySelector('input[placeholder="Seu e-mail"]').value;

  const cidade = cidadeSelect.value;

  /* RETORNO */
  formAdocao.innerHTML = `

    <div class="form-step active">

      <div class="form-content">

        <div style="
          width:90px;
          height:90px;
          margin:0 auto 25px;
          border-radius:50%;
          background:#0097b2;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#fff;
          font-size:38px;
        ">
          <i class="fa-solid fa-check"></i>
        </div>

        <h2>
          Solicitação enviada com sucesso!
        </h2>

        <p style="max-width:520px; margin:auto;">

          Obrigado, <strong>${nome}</strong> 

          Recebemos sua solicitação de adoção e ela será analisada pela nossa equipe.

          Em breve entraremos em contato pelo e-mail
          <strong>${email}</strong> para continuar o processo.

          Ficamos felizes em saber que um pet poderá ganhar um novo lar em
          <strong>${cidade}.</strong> 

        </p>

<button
  type="button"
  class="btn-continuar"
  style="
    margin-top:35px;
    max-width:420px;
    width:100%;
    height:58px;
    font-size:17px;
    border-radius:14px;
  "
  onclick="document.getElementById('modalAdocao').classList.remove('active')"
>
  Fechar
</button>


      </div>

    </div>

  `;

});

