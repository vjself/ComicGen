import React from 'react';
import { render } from 'react-dom';
import { Strip, Panel, Character, Balloon } from 'react-komik';
import { connect } from "react-redux";


	let Comic = (props) => (
		<div className="comic-container">
		<Strip title="Your title here" column="1">
			<Panel>
				<Character
					image="char.png">
					<Balloon 
						text={props.balloonInput} />
				</Character>
			</Panel>
			<Panel>
				<Character
					image="char.png">
					<Balloon 
						text="Reactify Comic!" />
				</Character>
			</Panel>
		</Strip> 
		</div>
	);

	render(<Comic />, document.getElementById('root'));

	const mapStateToProps = reduxState => {
		return {
		  user: reduxState.user,
		  userComic: reduxState.userComic,
		  titleInput: reduxState.titleInput,
		  balloonInput: reduxState.balloonInput,
		  panelBackground: reduxState.panelBackground,
		  balloonToggle: reduxState.balloonToggle,
		  char:reduxState.char
		};
	  };
	  
	  export default connect(
		mapStateToProps,
		null
	  )(Comic);