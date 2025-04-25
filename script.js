document.addEventListener('DOMContentLoaded', function()(
const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

botaoDeAcessibilidade.addEventLister('click', function(){
    botaoDeAcessibilidade.ClassList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.ClassList.toggle('apresenta-lista')
})

const aumentaFonteBotao = document.getElementById('aumentar-fonte');
const diminuiFonteBotao = document.getElementById('diminuir-fonte');

let tamanhoAtualFonte = 1;

aumentaFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = '${tamanhoAtualFonte}ren'
})
    
    diminuiFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = '$(tamanhoAtualFonte)ren'
    
})