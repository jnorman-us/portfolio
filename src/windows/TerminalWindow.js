import React from 'react';

import Window from './Window.js';

class TerminalWindow extends Window
{
	constructor()
	{
		super("joseph@jnorman.dev -- ~/portfolio", 100, 100, 500, 400, '#2E3436');
		//command_set = 
	}

	renderContent()
	{
		return (
			<div className="">
				Terminal!
			</div>
		);
	}
}

export default TerminalWindow;