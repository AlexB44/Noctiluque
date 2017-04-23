var buttons = document.querySelectorAll('li')
var infos = document.querySelectorAll('.info')

buttons.forEach(function(elem) {
	elem.addEventListener('click', function(e) {
  	var name = e.target.getAttribute("name")
    infos.forEach(function(info) {
    	info.classList.remove("active")
      if (info.classList.contains(name)) {
    		info.classList.add("active")
      }
    })
  })
})