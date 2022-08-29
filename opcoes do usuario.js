  /** 1) Fazer um programa onde o usuário pode acessar as seguintes opções:
  A) Falar com a atendente B) Falar com o RH C) Falar com o gerente D) Sair
  Mostrar mensagens para cada opção!
  (DESAFIO: Fazer voltar para o menu caso A, B, C)*/

let opcaoUsuario;

opcaoUsuario = prompt("A) Falar com a atendente\n B) Falar com o RH\n C) Falar com o gerente\n D) Sair").toUpperCase()

if (opcaoUsuario == 'A' || opcaoUsuario == 'B' || opcaoUsuario == 'C' || opcaoUsuario == 'D'){
  switch (opcaoUsuario){
    case 'A':
      alert("Falar com a atendente!")
      reapresentar()
    break
    case 'B':
      alert("Falar com o RH")
      reapresentar()
    break
    case 'C':
      alert("Falar com a gerencia")
      reapresentar()
    break

    case 'D':
      alert("Tenha um bom dia!")
    break
  }

function reapresentar()
  {
    opcaoUsuario = prompt("A) Falar com a atendente\n B) Falar com o RH\n C) Falar com o gerente\n D) Sair").toUpperCase()
    if(opcaoUsuario == 'A' || opcaoUsuario == 'B' || opcaoUsuario == 'C' || opcaoUsuario == 'D')
    verificar()
    else{
      alert("opção não valida")
      reapresentar()
    }
  }

  function verificar(){

  switch (opcaoUsuario){
    case 'A':
      alert("Falar com a atendente")
      reapresentar()
    break
    case 'B':
      alert("Falar com o RH")
      reapresentar()
    break
    case 'C':
      alert("Falar com a gerencia")
      reapresentar()
    break
    
    case 'D':
      alert("Tenha um bom dia!")
    break
  }
  }
}
else{
  alert("opção não valida")
  reapresentar()
}
