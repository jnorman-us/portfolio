import React from 'react';

import '../static/css/window.css';

class Window extends React.Component
{
	constructor(width=100, height=100, background_color='#000000')
	{
		super();

		this.position_x = 50;
		this.position_y = 50;

		this.style_window = {
			width: width + 'px',
			height: height + 'px',
			left: this.position_x + 'px',
			top: this.position_y + 'px',
		};

		this.style_content = {
			background_color: background_color
		};
	}

	render()
	{
		return (
			<div className="window" style={ this.style_window }>
				<div className="window-bar">
					Test
				</div>
				<div className="window-content" style={ this.style_content }>
					{ this.renderContent() }
				</div>
			</div>
		);
	}
}

export default Window;