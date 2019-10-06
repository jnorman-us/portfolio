import React from 'react';

import './static/css/desktop.css';

import WindowManager from './WindowManager.js';

class Desktop extends React.Component
{
	render()
	{
		return (
			<div id="desktop" className="desktop">
				{ WindowManager.openTerminalWindow() }
			</div>
		);
	}
}

export default Desktop;