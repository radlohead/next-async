import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../src/components/Layout';

const Index = (props: any) => {
	return (
		<div>
			<Layout>
				<p>Hello Next.js</p>
				<ul>
					{props.shows.map(({show}: any) => {
						return (
							<li key={show.id}>
								<Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
									<a>{show.name}</a>
								</Link>
							</li>
						)
					})}
				</ul>
			</Layout>
		</div>
	)
}

Index.getInitialProps = async () => {
	const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
	const data = await res.json();

	return {
		shows: data
	}
}

export default Index