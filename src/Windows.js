import React from 'react';

import { hasWindowData, getWindowData } from './data/WindowData';

import Window from './windows/Window.js';
import TerminalWindow from './windows/TerminalWindow.js';
import ProjectWindow from './windows/ProjectWindow.js';

class Windows extends React.Component
{
	constructor(props)
	{
		super(props);

		this.windows_i = 0;
		this.windows = new Map();
		this.windows.set(this.windows_i ++, getWindowData('window_terminal'));

		this.state = {
			newWindow: false,
		};
	}

	openWindow(data_index)
	{
		if(hasWindowData(data_index))
		{
			this.windows.set(this.windows_i ++, getWindowData(data_index));

			this.setState({
				newWindow: !this.state.newWindow,
			});
		}
	}

	renderWindows()
	{
		var renderedWindows = [];
		for(var [id, window_data] of this.windows)
		{
			switch(window_data.type)
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
								openWindow={ this.openWindow.bind(this) }
							/>
						</Window>
					);
					break;
				case 'project':
					renderedWindows.push(
						<Window
							key={ id }
							backgroundColor="#ffffff"
							title={ window_data.data.title }
							draggable
							closable
							pos={{
								x: 'random',
								y: 'random',
							}}
						>
							<ProjectWindow
								openWindow={ this.openWindow.bind(this) }
								data={ window_data.data }
							/>
						</Window>
					);
					break;
				default: break;
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
