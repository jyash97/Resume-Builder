import React from 'react';
import { css } from 'emotion';

import { Button } from '../components';

const headerStyles = css`
	overflow: hidden;
	background-image: linear-gradient(to right, rgba(78, 84, 200, 0.6), rgba(143, 148, 251, 0.7)),
		url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c1b566f6cf95b8fe438961fd065158cd&auto=format&fit=crop&w=1950&q=80');
	background-position: center;
	background-size: cover;
	padding: 200px;
	text-align: center;
`;

const titleStyles = css`
	font-weight: 300;
	color: white;
	font-size: 32px;
	margin: 20px auto;
	span {
		font-weight: 400;
	}
`;

const Home = ({ history }) => (
	<div className={headerStyles}>
		<h4 className={titleStyles}>
			Create professional Resume for <span>free</span>.
		</h4>
		<Button text="Create Resume" onClick={() => history.push('/resume')} type="secondary" />
	</div>
);

export default Home;
