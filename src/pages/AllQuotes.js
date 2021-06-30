import React, { Fragment } from 'react';
import QuoteList from '../components/quotes/QuoteList';

export const Dummy_quotes = [
	{ id: 'q1', author: 'Pranav1', text: 'Hello world1' },
	{ id: 'q2', author: 'Pranav2', text: 'Hello world2' },
];

const AllQuotes = () => {
	return (
		<Fragment>
			<h1>All Quotes page</h1>
			<QuoteList quotes={Dummy_quotes} />
		</Fragment>
	);
};

export default AllQuotes;
