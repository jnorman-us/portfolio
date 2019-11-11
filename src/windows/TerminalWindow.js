import React from 'react';

import { hasTerminalData, getTerminalData } from '../data/TerminalData';
import '../static/css/terminal.css';

class TerminalWindow extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			commands: [],
			renderedLines: [],
		};
	}

	componentDidMount()
	{
		this.renderOutput('start');
	}

	onEnter(e)
	{
		if(e.keyCode === 13)
		{
			var commandText = e.target.value;
			e.target.value = '';
			if(hasTerminalData(commandText))
			{
				this.setState({
					commands: this.state.commands.concat(commandText),
				});
				this.renderOutput(commandText);

				// now, open window
				var terminalData = getTerminalData(commandText);
				if(terminalData.window != null)
				{
					this.props.openWindow(terminalData.window);
				}
			}
			else
			{
				this.setState({
					commands: this.state.commands.concat('error'),
				});
				this.renderOutput('error', commandText);
			}
		}
	}

	render()
	{
		return (
			<div className="terminal">
				{ this.state.renderedLines }
				{ this.renderInputLine() }
			</div>
		);
	}

	renderOutput(command, attemptedCommand)
	{
		var outputLines = [];

		for(var line of	getTerminalData(command).output)
		{
			outputLines.push(
				<div className="terminal-query-output">
					{ this.renderOutputLine(line) }
				</div>
			);
		}

		var lines = (
			<div className="terminal-command">
				<div className="terminal-command-query">
					<span className="green">joseph@jnorman.dev:</span><span className="white">~$</span>
					<input className="terminal-command-prompt" value={ command !== 'error' ? command : attemptedCommand } readOnly></input>
				</div><br></br>
				{ outputLines }
			</div>
		);

		this.setState({
			renderedLines: this.state.renderedLines.concat(lines)
		});
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
		return (
			<div className="terminal-command-query">
				<span className="green">joseph@jnorman.dev:</span><span className="white">~$</span>
				<input onKeyDown={ this.onEnter.bind(this) }  className="terminal-command-prompt"></input>
			</div>
		);
	}
}

export default TerminalWindow;
