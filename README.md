# ntsistema
scripts de demonstração com PHP/Git e GitHub
# comandos do git em rede local
# git init
inicia o repositiorio do git
# git status
verifica o statuas dos arquivos a serem adicionados 
# git add
adcionar os arquivos para staged area, você pode 
usar o git add da seguinte forma adcionar um arquivo 
especifico -> git add + nome_arquivo
adcionar todos os aruqivos de uma vez -> git add .
adcionar arquivos por extensão -> git 
add*.extensão(Ex. .php. inc etc)
# git commit
serve para comitar os arquivos da staged area
pode usar o comando digite
git commit -m "descrição do commit"
a opção -m faz com que a pergunta que aparece 
antes e commitar não apareça
se usar o git commit -a -m "descrição do commit"
vc pula a etapa do git add com a opção  -a
# git diff 
verifica quais foram as linhas alteradas no arquivo 
antes da staged area
para verifica as alteraçoes dos arquivos que estão 
na staged area tem q usar o comando -> gitt diff 
--staged
#  git log
retorna uma lista dos commit efetuados no seu 
projeto. utilizando o parametro -p ele retorna uma 
lista dos commit em ordem cronologica e com as 
modificações feitas em cada commit. para limitar a 
quantidade de commit basta usar o parametro -p com o 
parametro "-1" seguido da quantidade que deseja 
limitar. Ex: -> git log -p -1
para exibir apenas os id dos commit, basta usar -> 
git log -- pretty=oneline
# gitk
exibe uma interface com uma lista dos commit
# git commit --amend -m "descrição do commit"
serve para realizar uma alteração de um arquivo 
que foi commitado sem querer
# git reset nome_do_arquivo
serve para remover determinado arquivo da staged 
area
# git checkout --<file>
serve para revertes alterações feitas em um arquivo de forma incorreta
# git rm <file>
serve para remover uma determinado arquivo do repositorio
# git tag
serve para cria tags pra seu repositorio onde estaram guardados as versõe 
do projeto em uso
Ex: git tag -a nome_da_tag -m "descricao da tag"
se desejar cria uma tag com uma versão especifica de um commit basta usar
git tag -a nome_da_tag <codigo_do_commit> -m "descricao da tag"
# git show
serve para detalhar uma tag
Ex: git show nome_da_tag
# git checkout nome_tag
serve para visualizar os arquivos da tag especificada pelo usuário
# git checkout master
serve para voltar ao padrão dos arquivos do sistema
# git tag -d nome_tag
server para deletar uma tag
# git branch nome_do_branch
branch é uma ramificação do sitema, serve para a equipe poder trabalhar 
de forma separada, por exemplo cada branch seria uma versão do sistema.
se quiser cria um branch e ja da um checkout direto basta usar o seguinte 
comando
git branch -b nome_do_branch
# git checkout nome_do_branch
server para colocar os arquivos no branch que desejar
# git merge nome_do_branch 
serve para mesclar as alterações de um branch pra outro
por exemplo vc tem o branch master q é o padrão ai cria um branch teste 
para fazer algumas alterações, ou seja, depois que vc fizer todos os 
teste vc poode facilmen pegar as alterações que vc fez no branch teste e 
mesclar no branch master.
# git branch -d nome_do_branch
serve para deletar um branch
# git branch
serve para listar os branch criados
#compartilhamento de reporitorios em rede
# git init --bare
iniciar um repositorio para compartilhar na rede
# git clone  file:////<pasta do servidor> <nome do compartilhamento>
serve para clona um projeto para um determinado local
# git remote
serve para sabe o nome do seu servidor remoto
# git push <servidor_remoto> master
serve para enviar os arquivos comitados para o servidor
# git pull <servidor_remoto> master
serve para atualizar os arquivos que foram enviados para sevidor em sua 
pasta local 
# git fetch <servidor_remoto> <nome_do_branch>
serve para mesclar os arquivos que foram enviados para sevidor, para um 
branch especifico de seu projeto
# trabalhando com GitHub
# ssh-keygen
server para gerar as chaves de acesso ssh
# vincular char no GitHub
 pegue as chaves ssh geradas pelo git, vá em config do github e na opção ssh e cri um anova chave ssh e cole no campo a chave gerada pelo git, deopis é so salavr e desenvolver seu projeto.
 
