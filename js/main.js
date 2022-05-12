function resizeListener() {
	const height = window.innerHeight.toString()
	const width = window.innerWidth.toString()
	const screenH = window.screen.height.toString()
	const screenW = window.screen.width.toString()
	const dpr = window.devicePixelRatio.toFixed(2)

	document.querySelector('#height').textContent = height
	document.querySelector('#width').textContent = width
	document.querySelector('#screenH').textContent = screenH
	document.querySelector('#screenW').textContent = screenW
	document.querySelector('#dpr').textContent = dpr
}

window.addEventListener('resize', resizeListener)
;(function () {
	resizeListener()
})()
