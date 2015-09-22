var app = angular.module('cadastroApp',[]);
app.controller('CadastroListController', function(){
    var cadastroList = this;
    cadastroList.pessoas = [{nome:'sostenes',cpf:'00903380198',idade:19}];

    cadastroList.addPessoa = function(){
        cadastroList.pessoas.push({nome: cadastroList.pessoaNome,
                                     cpf:  cadastroList.pessoaCpf,
                                     idade:  cadastroList.pessoaIdade
                                  });
        cadastroList.pessoaNome = '';
        cadastroList.pessoaCpf  = '';
        cadastroList.pessoaIdade= '';
         
    };
    cadastroList.listagem = function(){
      var qtd = 0;
        angular.forEach(cadastroList.pessoas, function(pessoa){
        qtd += pessoa.idade ? true : 1;
      });
      return qtd;
   } 
    cadastroList.mediaIdade = function() {
      var count = 0;
      var media = 0; 
        angular.forEach(cadastroList.pessoas, function(pessoa) {
        count += pessoa.nome ? true : 1;
        media += pessoa.idade / count;     
      });

      return media;
    };
 
    
    
   
});























