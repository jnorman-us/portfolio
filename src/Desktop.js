import React from 'react';

import './static/css/desktop.css';

import Windows from './Windows.js';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

class Desktop extends React.Component
{
	constructor()
	{
		super();

		this.state = {
			text: []
		};

		setInterval(this.updateText.bind(this), 1000 / 10);
	}

	clearText()
	{
		var linesPerPage = window.innerHeight / 21;

		var text = [];
		for(var i = 0; i < linesPerPage; i ++)
		{
			text.unshift(this.getRandomLine());
		}

		this.setState({
			text: text
		});
	}

	updateText()
	{
		var linesPerPage = window.innerHeight / 21;

		var text = this.state.text.slice(0);
		text.unshift(this.getRandomLine());

		if(text.length >= linesPerPage)
		{
			text.pop();
		}
		this.setState({
			text: text
		});
	}

	getRandomLine()
	{
		var charactersPerLine = window.innerWidth / 8.5328;
		var result = '';

		for(var i = 0; i < charactersPerLine; i ++)
		{
			if(Math.random() > .7)
				result += characters.charAt(Math.floor(Math.random() * characters.length));
			else
				result += ' ';
		}
		return result;
	}

	render()
	{
		var renderText = [];
		for(var line of this.state.text)
		{
			renderText.push(<div key={ renderText.length }>{line}</div>);
		}

		return (
			<div id="desktop" className="desktop">
				<div className="desktop-background">
					{ renderText }
				</div>
				<Windows />
			</div>
		);
	}

	componentDidMount()
	{
		this.clearText();
		window.addEventListener('resize', this.clearText.bind(this));
	}
}

export default Desktop;
