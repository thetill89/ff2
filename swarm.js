var mySpeed = 1, autoBuy = false

angular.element(document.querySelector('.ng-scope')).scope().game.gameSpeed = mySpeed
var auto = setInterval(function() { buyUpgrades() }, 250)

function buyUpgrades() {
	if (!autoBuy) return
	var key = new KeyboardEvent("keydown", { bubbles: true, cancelable: true, altKey: true, keyCode: 65 })
	document.body.dispatchEvent(key)
}

createButton(1, 'Reset', 560)
createButton(2, 'Speed: ' + mySpeed, 470)
createButton(3, 'Autobuy', 370)
b2.onclick = function() {
	mySpeed = 1
	angular.element(document.querySelector('.ng-scope')).scope().game.gameSpeed = mySpeed
}
b2.onclick = function() {
	mySpeed *= 3
	if (mySpeed > 81) mySpeed = 1
	this.innerText = 'Speed: ' + mySpeed
	angular.element(document.querySelector('.ng-scope')).scope().game.gameSpeed = mySpeed
}

b3.onclick = function() {
	autoBuy = !autoBuy
	if (autoBuy) { 
		buyUpgrades()
		this.style.backgroundColor = '#2a9fd6'
	}
	else this.style.backgroundColor = 'black'
}

function createButton(id, txt, right = 0 , width = 90) {
	if (document.getElementById('b' + id)) document.getElementById('b' + id).remove()
	let btn = document.createElement('button')
	btn.id = 'b' + id
	btn.innerText = txt
	btn.style.fontSize = '15px'
	btn.style.lineHeight = '12px'
	btn.style.backgroundColor = 'black'//'#222222'
	btn.style.border = 'none'
	btn.style.color = 'white'
	btn.style.position = 'absolute'
	btn.style.right = right + 'px'
	btn.style.top = '0px'
	btn.style.width =  width + 'px'
	btn.style.height =  '40px'
	btn.style.outline = 'none' 
	btn.style.cursor = 'default'
	document.getElementsByClassName('ng-scope')[0].appendChild(btn); 
}
if (document.getElementsByClassName('navbar navbar-default ng-scope').length) document.getElementsByClassName('navbar navbar-default ng-scope')[0].remove()
