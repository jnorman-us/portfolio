import React from 'react';

import Window from './Window.js';

import '../static/css/terminal.css';

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

		this.commandTemplates = new Map();
		this.commandTemplates.set('start', {
			output: [ 
				'$gHello.',
				'$wI am Joseph Norman, Computer Science student at the University of Texas at Dallas',
				'$wTo get started, try out the "help" command',
			],
			window: false,
		});

		this.setInState({
			commands: [
				'start',
			],
			renderedLines: [],
			line: 0,
		});
		this.renderOutput('start');
	}

	onEnter(e)
	{
		if(e.keyCode === 13)
		{
			var state = this.getState();
			var commandText = e.target.value;
			var commands = state.commands.slice(0);

			if(this.commandTemplates.has(commandText))
			{
				commands.unshift(commandText);
				this.setInState({
					commands: commands,
				});

				// now, open window
			}
			else
			{
				commands.unshift('error');
				this.setInState({
					commands: commands,
				});
			}

			for( ; state.line < state.commands.length; state.line ++)
			{
				var self = this;
				setTimeout(function() {
					self.renderLine(state.command[state.line]);
				}, 250 * this.state.line);
			}
		}
	}

	renderContent()
	{
		console.log(this.getState());
		return (
			<div className="terminal">
				{ this.getState().renderedLines }
			</div>
		);
	}

	renderOutput(command)
	{
		var lines = [];
		var outputLines = [];

		for(var line of this.commandTemplates.get(command).output)
		{
			outputLines.push(
				<div className="terminal-query-output">
					{ this.renderOutputLine(line) }
				</div>
			);
		}

		lines.push(
			<div className="terminal-command">
				<div className="terminal-command-query">
					<span className="green">joseph@jnorman.dev:</span><span className="white">~$</span>
					<input className="terminal-command-prompt" value={command} readOnly></input>
				</div><br></br>
				{ outputLines }
			</div>
		);

		this.setInState({
			renderedLines: this.getState().renderedLines.concat(lines)
		});
	}

	renderOutputLine(line)
	{/*
		var colorBlock = [];

		var index = 0;
		var opened = false;
		while(line.indexOf('$', index))
		{
			if(opened)
			{
				opened = false;
				colorBlock
			}
			else
			{
				opened = true;
			}
			var colorCode = 
			index = line.indexOf('$', index + 1);
		}*/
		return <span className="white">{line}</span>
	}
}

export default TerminalWindow;