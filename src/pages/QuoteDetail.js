import React, { Fragment } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import { Dummy_quotes } from './AllQuotes';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const QuoteDetail = () => {
	const params = useParams();
	const match = useRouteMatch();
	console.log(match);
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
			<Route path={`${match.path}`} exact>
				<div className='centered'>
					<Link className='btn--flat' to={`${match.url}/comments`}>
						Load comments
					</Link>
				</div>
			</Route>
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
};

export default QuoteDetail;
