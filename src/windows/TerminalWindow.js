import React from 'react';

import Window from './Window.js';

import '../static/css/terminal.css';

class TerminalWindow extends Window
{
	constructor()
	{
		super({
			closable: false,
			width: this.getWidth(),
			height: this.getHeight(),
			x_pos: this.getXPos("center"),
			y_pos: this.getYPos("center"),
			background_color: '#2E3436',
			window_title: 'joseph@jnorman.dev -- ~/portfolio',
		});

		this.setState({
			commands: []
		});
	}

	enterCommand(e)
	{
		if(e.key === 'Enter')
			console.log(e)
	}

	renderContent()
	{
		return (
			<div className="terminal">
				<div className="terminal-command">
					<div className="terminal-command-query">joseph@jnorman.dev:~$ </div>
					<div className="terminal-command-prompt" contentEditable="false">help</div>
					<div className="terminal-query-output">this is some test output</div>
					<div className="terminal-query-output">this is some more test output</div>
				</div>
				<div className="terminal-command">
					<div className="terminal-command-query">joseph@jnorman.dev:~$ </div>
					<div className="terminal-command-prompt" 
						onKeyPress={ this.enterCommand } contentEditable="true"></div>
				</div>
			</div>
		);
	}
}

export default TerminalWindow;