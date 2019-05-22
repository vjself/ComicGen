
import React, { Component } from 'react'
import { Strip, Panel, Character, Balloon } from 'react-komik';

export default class Comic extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 
		}
	}
	
	render() {
		return (
			<div className="comic-container">
				<Strip title="Your title here" column="1">
			<Panel>
				<Character
					image="char.png">
					<Balloon 
						text="Reactify Comic!" />
				</Character>
			</Panel>
		</Strip>
			</div>
		)
	}
}
		