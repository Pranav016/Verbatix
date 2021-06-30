import React, { Fragment } from 'react';
import { useParams, Route, Switch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import { Dummy_quotes } from './AllQuotes';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const QuoteDetail = () => {
	const params = useParams();
	const selectedQuote = Dummy_quotes.find(
		(quote) => quote.id === params.quoteId
	);

	if (!selectedQuote) {
		return <p>No quote found!</p>;
	}

	return (
		<Fragment>
			<h1>Quote Detail page</h1>
			<HighlightedQuote
				text={selectedQuote.text}
				author={selectedQuote.author}
			/>

			<Switch>
				<Route to={`/quotes/${params.quoteId}/comments`} exact>
					<Comments />
				</Route>
			</Switch>
		</Fragment>
	);
};

export default QuoteDetail;
