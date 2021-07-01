import React, { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetail = () => {
	const {
		sendRequest,
		status,
		data: loadedQuote,
		error,
	} = useHttp(getSingleQuote, true);
	const params = useParams();
	const match = useRouteMatch();

	/* this destructuring helps in not passing whole
	params obj to useEffect otherwise it will refresh everytime */
	const { quoteId } = params;
	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	if (status === 'pending') {
		return (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <p className='centered focused'>{error}</p>;
	}

	if (!loadedQuote.text) {
		return <p className='centered'>No quote found!</p>;
	}

	return (
		<Fragment>
			<h1>Quote Detail page</h1>
			<HighlightedQuote
				text={loadedQuote.text}
				author={loadedQuote.author}
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
