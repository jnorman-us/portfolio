import React from 'react';

import Window from './Window.js';

class VideoWindow extends Window
{
	constructor(props)
	{
		super({
			closable: true,
			x_pos: "random",
			y_pos: "random",
			width: parseInt(props.width) + 2,
			height: parseInt(props.height) + 40,
			background_color: '#fafafa',
			window_title: 'Videos -- ' + props.video_link,
		});

		this.video_link = props.video_link;
		this.width = props.width;
		this.height = props.height;
	}

	renderContent()
	{
		return (
			<div className="video">
				<iframe className="video-frame" width={ this.width } height={ this.height } src={ this.video_link } frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>
		);
	}
}

export default VideoWindow;