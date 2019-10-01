import React from 'react';

import Window from './Window.js';

class TerminalWindow extends Window
{
	constructor()
	{
		super(500, 400, '#2E3436');
		//command_set = 
	}

	renderContent()
	{
		return (
			<div class="">
				Terminal!
			</div>
		);
	}
}

export default TerminalWindow;