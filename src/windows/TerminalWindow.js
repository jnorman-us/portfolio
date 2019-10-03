import React from 'react';

import Window from './Window.js';

class TerminalWindow extends Window
{
	constructor()
	{
		super({
			closable: false,
			x_pos: 100,
			y_pos: 100,
			width: 500,
			height: 440,
			background_color: '#2E3436',
			window_title: 'joseph@jnorman.dev -- ~/portfolio',
		});
	}

	renderContent()
	{
		return (
			<div className="terminal">
				Terminal!
			</div>
		);
	}
}

export default TerminalWindow;