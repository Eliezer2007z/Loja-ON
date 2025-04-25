

const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

botaoDeAcessibilidade.addEventLister('click', function(){
botaoDeAcessibilidade.ClassList.toggle('rotacao-botao');
opcoesDeAcessibilidade.ClassList.toggle('apresenta-lista')
})