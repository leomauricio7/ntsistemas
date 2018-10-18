app.controller("novoUserController", function ($scope, $http, $location) {
    $scope.app = "Lista de Usuários";
    $scope.users = [];
    $scope.nome = '';
    $scope.email = '';

    var url = 'http://localhost:3000';

    function limpaTela(){
        $scope.nome = '';
        $scope.email = '';
    }

    function validation(){
        if($scope.nome == ''){
        $scope.message = 'Preencha o campo nome!';
            return false;
        }

        if($scope.email == ''){
        $scope.message = 'Preencha o campo email!';
            return false;
        }
        return true;
    }
    $scope.save = function(){
        if(validation()){
        $http.post(url+'/users', {
            nome: $scope.nome,
            email: $scope.email
        }).then(function(){
            $scope.message = 'Adicionado com sucesso';
            limpaTela();
            $location.path('/home');
        }, function(){
            $scope.message = 'Erro';
        });
        }
    };

});