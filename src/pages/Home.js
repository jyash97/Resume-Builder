import React from 'react';
import { css } from 'emotion';

import { Button } from '../components';
import { getColor } from '../components/theme';

const headerStyles = css`
	overflow: hidden;
	background-image: linear-gradient(
			to right,
			${getColor('primary', '99')},
			${getColor('primary', '4d')}
		),
		url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c1b566f6cf95b8fe438961fd065158cd&auto=format&fit=crop&w=1950&q=80');
	background-position: center;
	background-size: cover;
	padding: 200px;
	max-height: 60vh;
	text-align: center;
`;

const footerStyles = css`
	display: flex;
	max-height: 20vh;
	padding: 50px;
	justify-content: center;
	align-items: center;
`;

const titleStyles = css`
	font-weight: 300;
	color: ${getColor('white')};
	font-size: 32px;
	margin: 20px auto;
	span {
		font-weight: 400;
	}
`;

const noteStyles = css`
	text-align: center;
	font-weight: 300;
	color: ${getColor('text')};
	span {
		font-weight: 400;
		color: ${getColor('title')};
	}
`;

const Home = ({ history }) => (
	<>
		<div className={headerStyles}>
			<h4 className={titleStyles}>
				Create professional Resume for <span>free</span>.
			</h4>
			<Button text="Create Resume" onClick={() => history.push('/resume')} />
		</div>
		<div className={footerStyles}>
			<Button
				text="See Github"
				type="primary"
				onClick={() => window.open('https://github.com/jyash97/resume-builder', '_blank')}
			/>
			<Button
				text="Report Issues"
				type="danger"
				onClick={() =>
					window.open('https://github.com/jyash97/resume-builder/issues', '_blank')
				}
			/>
		</div>
		<p className={noteStyles}>
			<span>Note: </span>This application is made on <span>experimental API</span> so it might
			break sometime. If you find the issue persistance do <span>Report</span> it.
		</p>
	</>
);

export default Home;
