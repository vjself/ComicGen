import React from 'react';
import { render } from 'react-dom';
import { Strip, Panel, Character, Balloon } from 'react-komik';

	let Comic = (props) => (
		<Strip title="Your title here" column="1">
			<Panel>
				<Character
					image="char.png">
					<Balloon 
						text="Reactify Comic!" />
				</Character>
			</Panel>
		</Strip>
	);

	render(<Comic />, document.getElementById('root'));

export default Comic;