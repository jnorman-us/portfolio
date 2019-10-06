import React from 'react';

import Window from './Window.js';

class VideoWindow extends Window
{
	constructor(props)
	{
		super({
			video_link: props.video_link,
			closable: true,
			x_pos: 0,
			y_pos: 0,
			width: parseInt(props.width) + 2,
			height: parseInt(props.height) + 40,
			background_color: '#fafafa',
			window_title: 'Videos -- ' + props.video_link,
		});
	}

	renderContent()
	{
		return (
			<div className="video">
				<iframe className="video-frame" width={ this.props.width } 
				height={ (this.props.height) } src={ this.props.video_link } 
				frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
				allowFullScreen></iframe>
			</div>
		);
	}
}

export default VideoWindow;