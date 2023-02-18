let voto = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let iterarNumbers = document.querySelector('.d-1-3');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');

let etapaAtual = 0;
let numero = '';

const comecarEtapa = ()=>{
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for(let i=0;i<etapa.numeros;i++){
        if(i==0) {
            numeroHtml +='<div class="numero pisca"></div>';    
        } else {
            numeroHtml +='<div class="numero"></div>';
        }
        
        //console.log(numeroHtml);
        
    }

    voto.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    iterarNumbers.innerHTML = numeroHtml;
}

const atualizaInterface = ()=>{
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true;
        } else {
            return  false;
        }
    });

    console.log("Candidato", candidato);
    if(candidato.length > 0){
        candidato = candidato[0];
        voto.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;

        let fotosHtml = '';


        for(let i in candidato.fotos){
            fotosHtml += `<div class="d-1-image"><img src="images/${candidato.fotos[i].url}" alt="Prefeito" />${candidato.fotos[i].legenda}</div>`;
            
        }

        lateral.innerHTML = fotosHtml;
    } else {
        voto.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
    }

}

const clicou = (n)=>{
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero !== null){
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInterface();
        }
    }

}


const branco = ()=>{
    voto.innerHTML = 'BRANCO';
    descricao.innerHTML = '<div class="voto--branco pisca">VOTO EM BRANCO</div>';

}

const corrige = ()=>{
   comecarEtapa();
}

const confirma = ()=>{
    alert("Clicou em CONFIRMA!");
}


comecarEtapa();