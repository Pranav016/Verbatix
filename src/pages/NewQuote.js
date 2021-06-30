import React, { Fragment } from 'react';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
	const addQuoteHandler = (quoteData) => {};

	return (
		<Fragment>
			<h1>New Quote page</h1>
			<QuoteForm onAddQuote={addQuoteHandler} />
		</Fragment>
	);
};

export default NewQuote;
