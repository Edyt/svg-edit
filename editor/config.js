// EXTENSION CONFIG
svgEditor.setConfig({
	extensions: [
		'ext-panning.js'
		// 'ext-overview_window.js', 'ext-markers.js', 'ext-connector.js', 'ext-eyedropper.js', 'ext-shapes.js', 'ext-imagelib.js', 'ext-grid.js', 'ext-polygon.js', 'ext-star.js', 'ext-storage.js'
	],
	// don't load content for localStorage
	noStorageOnLoad: true,
	noDefaultExtensions: true
});

// OTHER CONFIG
svgEditor.setConfig({	
	// canvasName: 'default',
	// canvas_expansion: 3,
	// initFill: {
		// color: 'FF0000', // solid red
		// opacity: 1
	// },
	// initStroke: {
		// width: 5,
		// color: '000000', // solid black
		// opacity: 1
	// },
	// initOpacity: 1,
	// colorPickerCSS: null,
	initTool: 'fhpath',
	// exportWindowType: 'new', // 'same'
	// wireframe: false,
	// showlayers: false,
	// no_save_warning: false,
	// PATH CONFIGURATION
	// imgPath: 'images/',
	// langPath: 'locale/',
	// extPath: 'extensions/',
	// jGraduatePath: 'jgraduate/images/',
	/*
	Uncomment the following to allow at least same domain (embedded) access,
	including file:// access.
	Setting as `['*']` would allow any domain to access but would be unsafe to
	data privacy and integrity.
	*/
	// allowedOrigins: [window.location.origin || 'null'], // May be 'null' (as a string) when used as a file:// URL
	// DOCUMENT PROPERTIES
	// dimensions: [640, 480],
	// EDITOR OPTIONS
	// gridSnapping: false,
	// gridColor: '#000',
	// baseUnit: 'px',
	// snappingStep: 10,
	showRulers: false
	// EXTENSION-RELATED (GRID)
	// showGrid: false, // Set by ext-grid.js
	// EXTENSION-RELATED (STORAGE)
	// noStorageOnLoad: false, // Some interaction with ext-storage.js; prevent even the loading of previously saved local storage
	// forceStorage: false, // Some interaction with ext-storage.js; strongly discouraged from modification as it bypasses user privacy by preventing them from choosing whether to keep local storage or not
	// emptyStorageOnDecline: true, // Used by ext-storage.js; empty any prior storage if the user declines to store
});

// PREF CHANGES
/**
setConfig() can also be used to set preferences in addition to
  configuration (see defaultPrefs in svg-editor.js for a list of
  possible settings), but at least if you are using ext-storage.js
  to store preferences, it will probably be better to let your
  users control these.
As with configuration, one may use allowInitialUserOverride, but
  in the case of preferences, any previously stored preferences
  will also thereby be enabled to override this setting (and at a
  higher priority than any URL preference setting overrides).
  Failing to use allowInitialUserOverride will ensure preferences
  are hard-coded here regardless of URL or prior user storage setting.
*/
svgEditor.setConfig(
	{
		// lang: '', // Set dynamically within locale.js if not previously set
		// iconsize: '', // Will default to 's' if the window height is smaller than the minimum height and 'm' otherwise
		/**
		* When showing the preferences dialog, svg-editor.js currently relies
		* on curPrefs instead of $.pref, so allowing an override for bkgd_color
		* means that this value won't have priority over block auto-detection as
		* far as determining which color shows initially in the preferences
		* dialog (though it can be changed and saved).
		*/
		// bkgd_color: '#FFF',
		// bkgd_url: '',
		// img_save: 'embed',
		// Only shows in UI as far as alert notices
		// save_notice_done: false,
		// export_notice_done: false
	}
);
