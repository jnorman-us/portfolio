import React from 'react';

import TerminalWindow from './windows/TerminalWindow.js';

import './static/css/desktop.css';


class Desktop extends React.Component
{
	constructor()
	{
		super();
	}

	render()
	{
		return (
			<div className="desktop">
				<TerminalWindow />
			</div>
		);
	}
}

export default Desktop;