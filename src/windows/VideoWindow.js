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
			background_color: '#fafafa',
			window_title: 'Videos -- ' + props.video_link,
		});
	}

	renderContent()
	{
		return;
	}
}

export default VideoWindow;