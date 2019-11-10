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
				backgroundColor: props.backgroundColor
			},
			reddot: {
				backgroundColor: props.closable ? '#ff3b47' : '#ffadb2'
			},
			yellowdot: {
				backgroundColor: props.closable ? '#ffc100' : '#ffe9a3'
			},
			greendot: {
				backgroundColor: props.closable ? '#00d742' : '#8bc99e'
			}
		};

		this.state = {
			dragging: false,
			deleted: false,
			window_size: {
				width: 0,
				height: 0,
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

		// references
		this.window_ref = React.createRef();
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
		if(this.props.closable === true)
		{
			this.setState({
				deleted: true
			});
		}
	}

	render()
	{
		return (this.state.deleted === false ? (
			<div ref={ this.window_ref } className="window" style={{
					marginLeft: this.state.window_pos.x + 'px',
					marginTop: this.state.window_pos.y + 'px',
				}}>
				<div className="window-bar" draggable={ this.props.draggable }
					onMouseDown={this.onMouseDown.bind(this)}
					onMouseUp={this.onMouseUp.bind(this)}
					onDrag={this.onDrag.bind(this)}>
					<div className="window-bar-dots" onClick={this.closeWindow.bind(this)}>
						<div className="window-bar-dot" style={ this.style.reddot }></div>
						<div className="window-bar-dot" style={ this.style.yellowdot }></div>
						<div className="window-bar-dot" style={ this.style.greendot }></div>
					</div>
					<div className="window-bar-text">
						{ this.props.title }
					</div>
				</div>
				<div className="window-content" style={ this.style.content }>
					{ this.props.children }
				</div>
			</div>
		) : (<div/>));
	}

	updateDimensions(first=false)
	{
		var x_pos = 0;
		var y_pos = 0;

		var pos_commands = this.props.pos;

		if(pos_commands.x === 'center')
		{
			x_pos = window.innerWidth / 2 - this.window_ref.current.offsetWidth / 2;
		}
		else if(first)
		{
			if(pos_commands.x === 'random')
				x_pos = Math.random() * (window.innerWidth - this.window_ref.current.offsetWidth);
			else if(typeof pos_commands.x === 'number')
				x_pos = pos_commands.x;
		}
		else
		{
			x_pos = this.state.window_pos.x;
		}

		if(pos_commands.y === 'center')
		{
			y_pos = window.innerHeight / 2 - this.window_ref.current.offsetHeight / 2;
		}
		else if(first)
		{
			if(pos_commands.y === 'random')
				y_pos = Math.random() * (window.innerHeight - this.window_ref.current.offsetHeight);
			else if(typeof pos_commands.y === 'number')
				y_pos = pos_commands.y;
		}
		else
		{
			y_pos = this.state.window_pos.y;
		}

		this.setState({
			window_pos: {
				x: x_pos,
				y: y_pos,
			}
		})
	}

	componentDidMount()
	{
		var self = this;
		this.updateDimensions(true);
		window.addEventListener('resize', function() {
			self.updateDimensions(false);
		});
	}
}

export default Window;
