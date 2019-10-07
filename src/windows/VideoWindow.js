import React from 'react';

import Window from './Window.js';

class VideoWindow extends Window
{
	constructor(props)
	{
		super({
			video_link: props.video_link,
			closable: true,
			draggable: true,
			pos: {
				x: 'random',
				y: 'random',
			},
			background_color: '#fafafa',
			window_title: 'Videos -- ' + props.video_link,
		});
	}

	renderContent()
	{
		return <div></div>;
	}
}

export default VideoWindow;