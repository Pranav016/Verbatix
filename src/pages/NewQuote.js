import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuote = () => {
	const history = useHistory();
	const { sendRequest, status } = useHttp(addQuote);

	useEffect(() => {
		if (status === 'completed') {
			history.push('/quotes');
		}
	}, [status, history]);

	const addQuoteHandler = (quoteData) => {
		sendRequest(quoteData);
	};

	return (
		<Fragment>
			<h1>New Quote page</h1>
			<QuoteForm
				isLoading={status === 'pending'}
				onAddQuote={addQuoteHandler}
			/>
		</Fragment>
	);
};

export default NewQuote;
