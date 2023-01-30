function resizeListener() {
	const height = window.innerHeight.toString()
	const width = window.innerWidth.toString()
	const screenH = window.screen.height.toString()
	const screenW = window.screen.width.toString()
	const dpr = window.devicePixelRatio.toFixed(2)

	document.getElementById('height').textContent = height
	document.getElementById('width').textContent = width
	document.getElementById('screenH').textContent = screenH
	document.getElementById('screenW').textContent = screenW
	document.getElementById('dpr').textContent = dpr
}

window.addEventListener('resize', resizeListener)
;(function () {
	resizeListener()
})()
