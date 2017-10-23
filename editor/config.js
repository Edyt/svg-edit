// EXTENSION CONFIG
methodDraw.setConfig({
	extensions: [
		'ext-panning.js'
	],
	initStroke: {
		width: 3
	},
	// don't load content for localStorage
	noStorageOnLoad: true,
	noDefaultExtensions: true
});

// OTHER CONFIG
methodDraw.setConfig({
	canvas_expansion: 1,
	initTool: 'fhpath',
	showRulers: false
});
