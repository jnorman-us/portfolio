import React from 'react';

import TerminalWindow from './windows/TerminalWindow.js';
import VideoWindow from './windows/VideoWindow.js';

class WindowManager
{
	static openTerminalWindow()
	{
		return <TerminalWindow />;
	}
	
	static openVideoWindow(video_link='')
	{
		return <VideoWindow video_link={ video_link }/>;
	}
}

export default WindowManager;