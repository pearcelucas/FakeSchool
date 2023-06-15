
// Revisão - Projeto Aluno
// Menu 
// 1. listar alunos
// 2. Buscar aluno (nome)
// 3. adicionar/cadastrar aluno
// 4. Editar/alterar aluno
// 5. Excluir/deletar aluno

//Criando a lista dos alunos
let mat = 1;
let listaAlunos = [
    {matricula: mat, nome: "LEANDRO OLIVEIRA", curso: "Javascript", nota:9.5 }
];


//criando o botao de listar alunos
let botaoListar = document.getElementById('listar');
botaoListar.addEventListener('click', listarAlunos);

//criando o texto no html

let texto = document.getElementById('relatorio2');

// criando a função de listar alunos

function listarAlunos()
{
    texto.innerText = "";
    for (let i = 0; i < listaAlunos.length; i++)
    {
        
        let paragrafo = document.createElement('p')
        paragrafo.innerText = `Matrícula: ${listaAlunos[i].matricula}\n Nome: ${listaAlunos[i].nome}\n Curso: ${listaAlunos[i].curso}\n Nota: ${listaAlunos[i].nota}\n\n`;
        texto.appendChild(paragrafo);         
                
    }
    
   
}



//criando o botao de buscar alunos
let botaoBuscar = document.getElementById('buscar');
botaoBuscar.addEventListener('click', listarPorNome);

// criando a função de listar pelo nome
function listarPorNome(nome){
    let name = prompt('Digite o nome do aluno:').toUpperCase();
    texto.innerText = "";
    for (let i = 0; i < listaAlunos.length; i++){
        if (listaAlunos[i].nome.includes(name)){
            let paragrafo = document.createElement('p')
        paragrafo.innerText = `Matrícula: ${listaAlunos[i].matricula}\n Nome: ${listaAlunos[i].nome}\n Curso: ${listaAlunos[i].curso}\n Nota: ${listaAlunos[i].nota}\n\n`;
        texto.appendChild(paragrafo); 
          
        }
        
    }
}



//criando o botao de cadastrar alunos
let botaoCadastrar = document.getElementById('cadastrar');
botaoCadastrar.addEventListener('click', cadastrarAluno);

// criando função de cadastrar aluno
function cadastrarAluno(matricula, nome, curso, nota){
    mat++
    matricula = mat; 
    nome = prompt('Digite o nome: ').toUpperCase();
    curso = prompt('Digite o curso: ');
    nota = Number(prompt('Digite a nota: '));
    let aluno = {matricula,nome, curso, nota};
    listaAlunos.push(aluno);
    alert('Aluno cadastrado com sucesso');

}


//criando o botao de editar alunos
let botaoEditar = document.getElementById('editar');
botaoEditar.addEventListener('click', editarAluno);


// criando função de editar aluno
function editarAluno (matricula, nome, curso, nota){
    let mat = Number(prompt('Digite a matricula: '));
    for (let i = 0; i < listaAlunos.length; i++){
        if (listaAlunos[i].matricula == mat ){
            matricula = mat;
            nome = prompt('Digite o nome: ').toUpperCase();
            curso = prompt('Digite o curso: ');
            nota = Number(prompt('Digite a nota: '));
            listaAlunos[i] = {matricula, nome, curso, nota};
            alert('Dados alterados com sucesso!');
 
        }
    }
}

//criando o botao de excluir alunos
let botaoExcluir = document.getElementById('excluir');
botaoExcluir.addEventListener('click', excluirAluno);

//função de excluir aluno

function excluirAluno(matricula){
    let mat = Number(prompt('Digite a matricula: '));
    for (let i = 0; i < listaAlunos.length; i++){
        if (listaAlunos[i].matricula == mat){
            //let indice = listaAlunos.indexOf(listaAçunos[i]);
            listaAlunos.splice(i, 1); // 1 para excluir e 0 para adicionar
            alert('Aluno deletado com sucesso');
        }

    }
}


