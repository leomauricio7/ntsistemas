app.controller("userController", function ($scope, $http) {
    $scope.app = "Lista de Usuários";
    $scope.users = [];
    $scope.nome = '';
    $scope.email = '';

    var url = 'http://localhost:3000';

    function sucess (res) {
        $scope.users = res.data;
    } 

    function error (err) {
    console.log(err)
    }

    function limpaTela(){
    $scope.nome = '';
    $scope.email = '';
    atualizaLista();
    }

    function atualizaLista(){
    $http.get(url+'/users').then(sucess, error);
    }

    $scope.verificaStatus = function(){
    var result = $scope.users.filter(function(elm){
    return elm.selecionado == true
    })
    return result.length == 1
    }

    function limparSelecionado(){
    $scope.users = $scope.users.map(function(elm) {
    elm.selecionado = false
    return elm
    })
    }
    atualizaLista();

    //verifica o dado selecionado
    $scope.dadoSelecionado = function(data){
        limparSelecionado()
        $scope.nome = data.nome
        $scope.email = data.email
        $scope.id = data._id
        data.selecionado = true
        console.log($scope.id);
    };

    $scope.edit = function(){
        $http.put(url+'/users/'+$scope.id, {
            nome: $scope.nome,
            email: $scope.email
            }).then(function(){
            $scope.message = 'Usuário atualizado com sucesso';
            limpaTela();
            limparSelecionado();
            }, function(){
            $scope.message = 'Error';
        });
    }

    //metodo de deletar o usuário
    $scope.delete = function(id){
    $http.delete(url+'/users/'+id).then(
    function(){
        $scope.message = 'Excluido com sucesso';
        atualizaLista();
        limparSelecionado();
        limpaTela();
    },
    function(){
        $scope.message = 'Error';
    });
    };

});