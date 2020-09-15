var resetMP = localStorage.getItem('resetMP') || 16, bestAP = [0,0], trackAP = [], customStyle, log = false

addButtons()
setStyle()
clearInterval(auto)
var auto = setInterval(function() {
	
	buyMax() 
	doAscend() 
	updateRunStats()
	updateAvgStats()


	
}, 50)

//-------------------------------------------------------------------------------------------------------------------
function buyMax() {
	var key = new KeyboardEvent("keydown", { bubbles: true, cancelable: true, keyCode: 32 })
	document.body.dispatchEvent(key)	
}


//-------------------------------------------------------------------------------------------------------------------
function doAscend() {
	if (getMajorPrestige() >= resetMP) {
		var time = getRunTime()
		var ap = getCurrentAP()
		var avgAp = ap/time*3.6
		var speed = getSpeedMulti() 
		var prod = getProdMulti()
		trackAP.push([avgAp, time])
		if (log) console.log(avgAp.toFixed(2) + ' ' + bestAP[1]  + ' | ' + speed +  ' | ' + prod)
		game.ascend()
		bestAP = [0,0]
	}
}


//-------------------------------------------------------------------------------------------------------------------
function updateRunStats() {
	var time = getRunTime()
	var mp = getMajorPrestige()
	var speed = getSpeedMulti() 
	var ap = getCurrentAP()
	var avgAp = ap/time*3.6
	if (avgAp > bestAP[0]) { 
		bestAP[0] = avgAp
		bestAP[1] = ' - MP: ' + mp
	}
	avgAp = avgAp.toFixed() + 'k'
	time = time.toFixed(1)
	document.getElementById('global-info').innerText = 'Time: ' + time + ' | AP/h: ' + avgAp + bestAP[1]  + ' | Speed: ' + speed 
}

function updateAvgStats() {
	if (trackAP.length > 100) trackAP.shift()
	var ap = time = 0
	if (trackAP.length) {
		for (var k of trackAP) {
			ap += k[0]
			time += k[1]
		}
		ap = (ap/trackAP.length).toFixed() + ' k'
		time = (time/trackAP.length).toFixed(1) + ' sec'
		if (trackAP.length < 100) time += '&nbsp&nbsp | &nbsp&nbsp' + trackAP.length
	}
	else ap = time = '-'
	b2.innerHTML =  'AP/h: &nbsp&nbsp' + ap + '&nbsp&nbsp | &nbsp&nbspAvg: &nbsp&nbsp' + time
}


//-------------------------------------------------------------------------------------------------------------------
function getCurrentAP() {
	return game.getUnclaimedAP().toNumber()
}

function getMajorPrestige() {
	return game.prestige.major.currentAscension.toNumber()
}

function getRunTime() {
	return (Date.now()-game.history.prestiges.ascension[0])/1000
}

function getSpeedMulti() {
	return game.multipliers.speedMultiplier.toFixed(2)
}

function getProdMulti() {
	return game.multipliers.outputMultiplier.toFixed(2)
}

//-------------------------------------------------------------------------------------------------------------------

function addButtons() {
	createButton(1, 'Min Prestige: ' + resetMP, 290, 115)
	createButton(2, '', 401, 240)
	b1.onclick = function() {
		resetMP++
		if (resetMP > 80) resetMP = 16
		else if (resetMP > 20) resetMP = 80
		this.innerText = 'Min Prestige: ' + resetMP
		localStorage.setItem('resetMP', resetMP)
		trackAP = []
	}
	b2.onclick = () => trackAP = []
}
function createButton(id, txt, right = 0 , width = 120) {
	if (document.getElementById('b' + id)) document.getElementById('b' + id).remove()
	let btn = document.createElement('button')
	btn.id = 'b' + id
	btn.innerText = txt
	btn.style.fontSize = '14px'
	btn.style.lineHeight = '12px'
	btn.style.fontFamily = 'Consoloas'
	btn.style.backgroundColor = '#4a4a4a'
	btn.style.border = '4px solid #1b1b1f'
	btn.style.color = 'white'
	btn.style.position = 'absolute'
	btn.style.right = right + 'px'
	btn.style.width =  width + 'px'
	btn.style.height =  '32px'
	btn.style.outline = 'none' 
	btn.style.cursor = 'default'
	document.getElementsByClassName('game-subfooter')[0].appendChild(btn); 
}

function setStyle() {
	if (!customStyle) {
		var customStyle = document.createElement("style")
		customStyle.type = "text/css"
		customStyle.innerText = '* { transition: none!important; animation: none!important; }'
		document.head.appendChild(customStyle)
		document.getElementById('global-info').style.fontFamily = 'Consolas'
		document.getElementsByClassName('game-title font-bold')[0].onclick = () => document.getElementById('ascension').click()
	}
}

