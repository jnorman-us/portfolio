import React from 'react';

import WindowManager from './WindowManager.js';

import './static/css/desktop.css';


class Desktop extends React.Component
{
	constructor()
	{
		WindowManager.initialize();
	}

	render()
	{
		return (
			<div className="desktop">
				{{ WindowManager.openTerminalWindow() }}
			</div>
		);
	}
}

export default Desktop;