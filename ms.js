function buildingbuy(nbr, amount=0) {
	  if (!amount) amount = aktbuystufe
	  let canBuy = getGold()-getValue(bcost[(nbr*4)-(4-amount)])	
	  if (Date.now() - buyStepTimer > 10000 && autoPlay) startIdleMode()
	  else if (canBuy > 0 && !lastBought[nbr-1]) {
			lastBought[nbr-1] = true
			buyStepTimer = Date.now()
			document.getElementsByClassName('gold')[0].innerText = convertValue(canBuy)
			$j.get('game/buildingbuy.php?b=' + nbr + '&s=' + amount, function(e) {
				if (e.erfolg == 1) {
					building = []
					bcost = []
					maxbplus = []
					tenbplus = []
					hundredbplus = []
					graubtn = []
					bincome = []
					building = e.building
					bcost = e.bcost
					maxbplus = e.maxbplus
					tenbplus = e.tenbplus
					hundredbplus = e.hundredbplus
					graubtn = e.graubtn
					bincome = e.bincome
					incomepersek = e.incomepersek
					bincomesec = []
					bincomesec = e.bincomesec
					incomeoffline = e.incomeoffline
					$j('.incomepersekanz').html('Dollar / sec: ' + incomepersek + '<br>Total Levels: +' + e.totalprof + '% Profit')
					$j('.incomepersekoff').html('Offline Profits:<br>Dollar / sec: ' + e.incomeoffline)
					$j('.gold').html(e.gold.slice(2, 12))
					for (i = 1; i < 9; i++) {
						$j('.b' + i + 'lvl').html('Lv. ' + building[i] + '<br><br>' +  bincomesec[i].toString().slice(2,12))
					}
					$j('.building' + nbr).css({ display: 'block' })
					if (bauto[nbr] >= 1 && nbr === 1) buildstart(nbr)
					buildingcostanz()
				}
				lastBought[nbr-1] = false
				displayStats()
			})	
	  }
}
