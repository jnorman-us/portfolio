import React from 'react';

import '../static/css/window.css';

class Window extends React.Component
{
	constructor(width=100, height=100, background_color='#000000')
	{
		super();

		// instance vars
		this.position_window = {
			x: 0,
			y: 0,
		};

		this.position_mouse = {
			x: 0,
			y: 0,
		};

		this.dragging = false;

		// styling constants
		this.style_content = {
			backgroundColor: background_color
		};

		this.style_reddot = {
			backgroundColor: '#ff3b47'
		};

		this.style_yellowdot = {
			backgroundColor: '#ffc100'
		};

		this.style_greendot = {
			backgroundColor: '#00d742'
		};

		this.style_window = {
			marginTop: '0px',
			marginBottom: '0px',
			width: width + 'px',
			height: height + 'px'
		};
	}

	updateWindowMargins()
	{
		this.style_window.marginTop = this.position_window.y + 'px';
		this.style_window.marginLeft = this.position_window.x + 'px';
	}

	onDragMotion(e)
	{
		var delta_x = e.screenX - this.position_mouse.x;
		var delta_y = e.screenY - this.position_mouse.y;

		this.position_mouse.x = e.screenX;
		this.position_mouse.y = e.screenY;

		this.position_window.x += delta_x;
		this.position_window.y += delta_y;

		this.updateWindowMargins();
	}

	render()
	{
		return (
			<div className="window" style={ this.style_window }>
				<div className="window-bar" onMouseMove={this.onDragMotion.bind(this)}>
					<div className="window-bar-dots">
						<div className="window-bar-dot" style={ this.style_reddot }></div>
						<div className="window-bar-dot" style={ this.style_yellowdot }></div>
						<div className="window-bar-dot" style={ this.style_greendot }></div>
					</div>
					<div className="window-bar-text">
						joseph@jnorman.dev -- ~/portfolio
					</div>
				</div>
				<div className="window-content" style={ this.style_content }>
					{ this.renderContent() }
				</div>
			</div>
		);
	}
}

export default Window;