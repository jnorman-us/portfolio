import React from 'react';

import Window from './windows/Window.js';
import TerminalWindow from './windows/TerminalWindow.js';

class Windows extends React.Component
{
	constructor(props)
	{
		super(props);

		this.windows_i = 0;
		this.windows = new Map();
		this.windows.set(this.windows_i ++, {
			type: 'terminal',
		});

		this.state = {
			newWindow: false,
		};
	}

	onWindowOpen()
	{
		this.setState({
			newWindow: !this.state.newWindow,
		});
	}

	onWindowClose(id)
	{
		this.setState({
			newWindow: !this.state.newWindow,
		});
	}

	renderWindows()
	{
		var renderedWindows = [];
		for(var [id, data] of this.windows)
		{
			switch(data.type)
			{
				case 'terminal':
					renderedWindows.push(
						<Window
							key={ id }
							backgroundColor="#2E3436"
							title="joseph@jnorman.dev -- ~/portfolio"
							pos={{
								x: 'center',
								y: 'center',
							}}
						>
							<TerminalWindow

							/>
						</Window>
					);
					break;
				case 'project':
					renderedWindows.push(
						<Window
							key={ id }
							backgroundColor="#ffffff"
							title={ data.title }
						>

						</Window>
					);
					break;
				default:
					renderedWindows.push(
						<h1 key={ id }>
							ERROR
						</h1>
					);
					break;
			}
		}
		return renderedWindows;
	}

	render()
	{
		return (
			<div>
				{ this.renderWindows() }
			</div>
		);
	}
}

export default Windows;
