/*
 [X] Saber quando o bortão foi clicado
 [x] Pegar o texto dentro do input
 [x] colocar esse texto na tela 
 [ ] deletar a tarefa da tela quando CLicar no X 
*/
function adicionartarefa () {
    let ValorDoInput = document.querySelector('input').value
    let li= document.createElement ("li")
    li.innerHTML = ValorDoInput + '<span onclick="deletartarefa(this)">❌</span>'

    document.querySelector('ul').appendChild(li)

   document.querySelector('input').value =''

}

function deletartarefa (li) {
  li.parentElement.remove()


}
