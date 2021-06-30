import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';

function App() {
	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<Redirect to='/quotes' />
				</Route>
				<Route path='/quotes' component={AllQuotes} exact />
				<Route path='/quotes/:quoteId' component={QuoteDetail} />
				<Route path='/new-quote' component={NewQuote} />
			</Switch>
		</Layout>
	);
}

export default App;
