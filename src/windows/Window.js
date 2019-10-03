import React from 'react';

import '../static/css/window.css';

class Window extends React.Component
{
	constructor(title="Window", 
		x_pos=100, y_pos=100, 
		width=100, height=100, 
		background_color='#000000')
	{
		super();

		this.title = title;

		// styling constants
		this.style = {
			content: {
				backgroundColor: background_color
			},
			reddot: {
				backgroundColor: '#ff3b47'
			},
			yellowdot: {
				backgroundColor: '#ffc100'
			},
			greendot: {
				backgroundColor: '#00d742'
			},
			window: {
				width: width + 'px',
				height: height + 'px'
			}
		};

		this.state = {
			dragging: false,
			window: {
				x: x_pos,
				y: y_pos,
			},
			mouse: {
				x: 0,
				y: 0
			}
		};
	}

	onDragMotion(e)
	{
		if(this.state.dragging == true)
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
					y: e.screenY,
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
		})
	}

	onMouseUp(e)
	{
		this.setState({
			dragging: false,
			mouse: {
				x: e.screenX,
				y: e.screenY
			}
		})
	}

	shouldComponentUpdate(nextProps, nextState)
	{
		return nextState.dragging;
	}

	render()
	{
		console.log('test');
		return (
			<div className="window" style={{ 
				...this.style.window,
				...{
					marginLeft: this.state.window.x + 'px',
					marginTop: this.state.window.y + 'px',
				}
				}}>
				<div className="window-bar" onMouseDown={this.onMouseDown.bind(this)} onMouseUp={this.onMouseUp.bind(this)} onMouseMove={this.onDragMotion.bind(this)}>
					<div className="window-bar-dots">
						<div className="window-bar-dot" style={ this.style.reddot }></div>
						<div className="window-bar-dot" style={ this.style.yellowdot }></div>
						<div className="window-bar-dot" style={ this.style.greendot }></div>
					</div>
					<div className="window-bar-text">
						{ this.title }
					</div>
				</div>
				<div className="window-content" style={ this.style.content }>
					{ this.renderContent() }
				</div>
			</div>
		);
	}
}

export default Window;