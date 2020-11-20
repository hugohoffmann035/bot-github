unFollowGitHub = () => {
  let contador = 0;
  let unFollow = 0;

  document.querySelectorAll('[name="commit"]').forEach((item, idx) => {
    contador++;
  })	

  document.querySelectorAll('[name="commit"]').forEach((item, idx) => {
    if(item.value.trim().toLowerCase() == 'follow') {
      contador--;
      console.log(`Já não segue essa pessoa!`)
    } else {
      setTimeout(() => {
        document.querySelectorAll('[name="commit"]')[idx].click()
        unFollow++;
        contador--;
        console.log(`Parou de seguir ${unFollow} pessoa(s)`)
      }, idx * 2048)
    }
  })
}

this.unFollowGitHub()