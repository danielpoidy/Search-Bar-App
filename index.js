


document.getElementById('inputsearch').addEventListener('keyup', function (event) {
  let searchName = document.getElementById('inputsearch')
  searchName = searchName.value.toLowerCase()

  let allNames = document.getElementsByClassName('name')

  for (let i = 0; i < allNames.length; i++) {
    const currentName = allNames[i].textContent.toLocaleLowerCase()
    if (currentName.includes(searchName)) {
      allNames[i].style.display = 'block'
    } else {
      allNames[i].style.display = 'none'
    }
  }

})
