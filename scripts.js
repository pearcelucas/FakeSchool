
//Criando a lista dos alunos
let mat = 1;
let listaAlunos = [
    {matricula: mat, nome: "LEANDRO OLIVEIRA", curso: "Javascript", nota:9.5 }
];


//criando o botao de listar alunos
let botaoListar = document.getElementById('listar');
let botaoListar2 = document.getElementById('listar2')
botaoListar.addEventListener('click', listarAlunos);
botaoListar2.addEventListener('click', listarAlunos);

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
let botaoBuscar2 = document.getElementById('buscar2');
botaoBuscar.addEventListener('click', listarPorNome);
botaoBuscar2.addEventListener('click', listarPorNome);

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
let botaoCadastrar2 = document.getElementById('cadastrar2');
botaoCadastrar.addEventListener('click', cadastrarAluno);
botaoCadastrar2.addEventListener('click', cadastrarAluno);

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
let botaoEditar2 = document.getElementById('editar2');
botaoEditar.addEventListener('click', editarAluno);
botaoEditar2.addEventListener('click', editarAluno);


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
let botaoExcluir2 = document.getElementById('excluir2');
botaoExcluir.addEventListener('click', excluirAluno);
botaoExcluir2.addEventListener('click', excluirAluno);

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


