import React from 'react';

import '../static/css/window.css';

class Window extends React.Component
{
	constructor(props)
	{
		super(props);

		// styling constants
		this.style = {
			content: {
				backgroundColor: this.props.background_color
			},
			reddot: {
				backgroundColor: this.props.closable ? '#ff3b47' : '#ffadb2'
			},
			yellowdot: {
				backgroundColor: this.props.closable ? '#ffc100' : '#ffe9a3'
			},
			greendot: {
				backgroundColor: this.props.closable ? '#00d742' : '#8bc99e'
			}
		};

		this.state = {
			title: this.props.window_title,
			closable: this.props.closable,
			dragging: false,
			deleted: false,
			window_size: {
				width: this.props.width,
				height: this.props.height,
			},
			window_pos: {
				x: 0,
				y: 0,
			},
			mouse_pos: {
				x: 0,
				y: 0,
			},
		};

		this.window_pos_commands = this.props.pos;
		this.windowRef = React.createRef();
	}

	onDrag(e)
	{
		if(this.state.dragging && e.screenX !== 0 && e.screenY !== 0)
		{
			var diff_x = e.screenX - this.state.mouse_pos.x;
			var diff_y = e.screenY - this.state.mouse_pos.y;

			this.setState({
				window_pos: {
					x: this.state.window_pos.x + diff_x,
					y: this.state.window_pos.y + diff_y,
				},
				mouse_pos: {
					x: e.screenX,
					y: e.screenY
				}
			});
		}
	}

	onMouseDown(e)
	{
		this.setState({
			dragging: true,
			mouse_pos: {
				x: e.screenX,
				y: e.screenY
			}
		});
	}

	onMouseUp()
	{
		this.setState({
			dragging: false,
		})
	}

	closeWindow(e)
	{
		if(this.state.closable === true)
		{
			this.setState({
				deleted: true
			});
		}
	}

	render()
	{
		return (this.state.deleted === false ? (
			<div ref={ this.windowRef } className="window" style={{ 
					marginLeft: this.state.window_pos.x + 'px',
					marginTop: this.state.window_pos.y + 'px',
				}}>
				<div className="window-bar" draggable="true" 
					onMouseDown={this.onMouseDown.bind(this)} 
					onMouseUp={this.onMouseUp.bind(this)} 
					onDrag={this.onDrag.bind(this)}>
					<div className="window-bar-dots" onClick={this.closeWindow.bind(this)}>
						<div className="window-bar-dot" style={ this.style.reddot }></div>
						<div className="window-bar-dot" style={ this.style.yellowdot }></div>
						<div className="window-bar-dot" style={ this.style.greendot }></div>
					</div>
					<div className="window-bar-text">
						{ this.state.title }
					</div>
				</div>
				<div className="window-content" style={ this.style.content }>
					{ this.renderContent() }
				</div>
			</div>
		) : (<div/>));
	}

	componentDidMount()
	{
		var self = this;
		this.setState({
			window_pos: (function() {
				var x_pos = 0;
				var y_pos = 0;

				console.log(self.window_pos_commands);
				if(self.window_pos_commands.x === 'center')
				{
					x_pos = window.innerWidth / 2 - self.windowRef.current.offsetWidth / 2;
				}
				else if(self.window_pos_commands.x === 'random')
				{
					
				}
				else
					x_pos = self.window_pos_commands.x;

				if(self.window_pos_commands.y === 'center')
				{
					y_pos = window.innerHeight / 2 - self.windowRef.current.offsetHeight / 2;
				}
				else if(self.window_pos_commands.y === 'random')
				{
					
				}
				else
				{
					y_pos = self.window_pos_commands.y;
				}
				console.log(x_pos, y_pos)
				return {
					x: x_pos,
					y: y_pos,
				}
			})
		});
	}
}

export default Window;