import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
	const history = useHistory();

	const addQuoteHandler = (quoteData) => {
		console.log(quoteData);

		history.push('/quotes');
	};

	return (
		<Fragment>
			<h1>New Quote page</h1>
			<QuoteForm onAddQuote={addQuoteHandler} />
		</Fragment>
	);
};

export default NewQuote;
