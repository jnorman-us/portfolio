import React from 'react';

import Window from './Window.js';
import TerminalPart from '../parts/TerminalPart.js';

class TerminalWindow extends Window
{
	constructor()
	{
		super({
			closable: false,
			draggable: false,
			pos: {
				x: 'center',
				y: 'center',
			},
			background_color: '#2E3436',
			window_title: 'joseph@jnorman.dev -- ~/portfolio',
		});
	}
		
	renderContent()
	{
		return (
			<TerminalPart />
		);
	}
}

export default TerminalWindow;