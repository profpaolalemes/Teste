var nomeAlunos = [];

function submit() {
  var nome1 = document.getElementById("nomeAluno1").value;
  var nome2 = document.getElementById("nomeAluno2").value;
  var nome3 = document.getElementById("nomeAluno3").value;
  var nome4 = document.getElementById("nomeAluno4").value;

  nomeAlunos.push(nome1, nome2, nome3, nome4);

  console.log(nomeAlunos);

  document.getElementById("mostrarNomes").innerHTML = nomeAlunos;

  document.getElementById("btnEnviar").style.display = "none";
  document.getElementById("btnOrganizar").style.display = "inline-block";
}

function organizar() {
  nomeAlunos.sort();
  document.getElementById("mostrarNomes").innerHTML = nomeAlunos;
}
