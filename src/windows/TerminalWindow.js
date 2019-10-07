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
				'$b$+--------------- Hello ---------------+$b$',
				'$w$I am Joseph Norman, Computer Science student$w$',
				'$w$at the $w$$o$University of Texas at Dallas.$o$',
				'$w$To get started, try out the $w$$g$"help"$g$$w$ command$w$',
			],
			window: false,
		});
		this.commandTemplates.set('error', {
			output: [
				'$r$Command not found!$r$',
				'$w$Try running the $w$$g$help$g$$w$ command$w$',
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
			var commandText = e.target.value;
			var commands = this.getState().commands.slice(0);

			if(this.commandTemplates.has(commandText))
			{
				commands.push(commandText);
				this.setInState({
					commands: commands,
				});

				// now, open window
			}
			else
			{
				commands.push('error');
				this.setInState({
					commands: commands,
				});
			}
			console.log("HEY")

			var commands = this.getState().commands;
			var i = 0;
			for(i = this.getState().line; i < this.getState().commands.length; i ++)
			{
				var self = this;
				console.log(i);
				setTimeout((function(newI) { console.log(newI); }).bind(i), 333 * i);
				// self.renderOutput(commands[newI]);
			}
			this.setInState({
				line: i,
			});

		}
	}

	renderContent()
	{
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

		console.log(command);
		for(var line of this.commandTemplates.get(command).output)
		{
			console.log(line);
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
				{ this.renderInputLine() }
			</div>
		);

		this.setInState({
			renderedLines: this.getState().renderedLines.concat(lines)
		});
		console.log(this.getState());
	}

	renderOutputLine(line)
	{
		const colors = new Map();
		colors.set('w', 'white');
		colors.set('r', 'red');
		colors.set('o', 'orange');
		colors.set('g', 'green');
		colors.set('b', 'blue');

		var colorBlocks = [];
		var tagArray = line.split('$');

		for(var i = 0; i < tagArray.length; i ++)
		{
			if(tagArray[i].length === 1)
			{
				// then should be a color tag
				var color = colors.get(tagArray[i]);
				var text = tagArray[i + 1];
				colorBlocks.push(<span className={ color }>{ text }</span>);
				i += 2;
			}
		}
		return colorBlocks;
	}

	renderInputLine()
	{
		var state = this.getState();

		if(state.line == state.renderedLines.length)
		{
			return (
				<div className="terminal-command-query">
					<span className="green">joseph@jnorman.dev:</span><span className="white">~$</span>
					<input onKeyDown={ this.onEnter.bind(this) }className="terminal-command-prompt"></input>
				</div>
			);
		}
	}
}

export default TerminalWindow;