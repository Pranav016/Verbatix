import React, { Fragment } from 'react';
import { useParams, Route, Switch } from 'react-router-dom';
import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
	const params = useParams();

	return (
		<Fragment>
			<h1>Quote Detail page</h1>
			<p>{params.quoteId}</p>
			<Switch>
				<Route to={`/quotes/${params.quoteId}/comments`} exact>
					<Comments />
				</Route>
			</Switch>
		</Fragment>
	);
};

export default QuoteDetail;
