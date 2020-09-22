var mySpeed = 1

createButton(1, 'Speed: ' + mySpeed)
b1.onclick = function() {
	mySpeed++
	if (mySpeed > 5) mySpeed = 1
	else if (mySpeed > 25) mySpeed = 90
	this.innerText = 'Speed: ' + mySpeed
	angular.element(document.querySelector('.ng-scope')).scope().game.gameSpeed = mySpeed
}


function createButton(id, txt, right = 730 , width = 120) {
	if (document.getElementById('b' + id)) document.getElementById('b' + id).remove()
	let btn = document.createElement('button')
	btn.id = 'b' + id
	btn.innerText = txt
	btn.style.fontSize = '16px'
	btn.style.lineHeight = '12px'
	btn.style.backgroundColor = '#222222'
	btn.style.border = 'none'
	btn.style.color = 'white'
	btn.style.position = 'absolute'
	btn.style.right = right + 'px'
	btn.style.top = '5px'
	btn.style.width =  width + 'px'
	btn.style.height =  '32px'
	btn.style.outline = 'none' 
	btn.style.cursor = 'default'
	document.getElementsByClassName('ng-scope')[0].appendChild(btn); 
}
if (document.getElementsByClassName('navbar navbar-default ng-scope').length) document.getElementsByClassName('navbar navbar-default ng-scope')[0].remove()
