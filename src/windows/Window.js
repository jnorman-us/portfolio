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
			},
			window: {
				width: this.props.width + 'px',
				height: this.props.height + 'px'
			}
		};

		this.state = {
			title: this.props.window_title,
			closable: this.props.closable,
			dragging: false,
			deleted: false,
			window: {
				x: this.props.x_pos,
				y: this.props.y_pos,
			},
			mouse: {
				x: 0,
				y: 0,
			},
		};
	}

	onDrag(e)
	{
		if(this.state.dragging && e.screenX !== 0 && e.screenY !== 0)
		{
			var diff_x = e.screenX - this.state.mouse.x;
			var diff_y = e.screenY - this.state.mouse.y;

			this.setState({
				window: {
					x: this.state.window.x + diff_x,
					y: this.state.window.y + diff_y,
				},
				mouse: {
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
			mouse: {
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
			<div className="window" style={{ 
				...this.style.window,
				...{
					marginLeft: this.state.window.x + 'px',
					marginTop: this.state.window.y + 'px',
				}
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

	getXPos(key)
	{

	}

	getYPos(key)
	{

	}

	getWidth(width)
	{

	}

	getHeight(height)
	{

	}
}

export default Window;