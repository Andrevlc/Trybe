const estados = document.querySelector('.estados');

function preencheEstados(){
  
  let auxEstados = ['','Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo',
  'Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco',
  'Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins']
  for (let i=1;i<auxEstados.length;i+=1){
    let criarOpcao = document.createElement('option');
    console.log(auxEstados[i])
    criarOpcao.innerText=auxEstados[i];
    console.log(criarOpcao);
    criarOpcao.setAttribute('value',[i]);
    console.log(criarOpcao);
    estados.appendChild(criarOpcao);
  }
}
preencheEstados();