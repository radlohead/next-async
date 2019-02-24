import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../src/components/Layout';

const Index = (props: any) => {
	return (
		<div className="nextAsync__wrapper">
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
				<style jsx global>{`
					h1, a {
						font-family: "Arial";
					}

					ul {
						padding: 0;
					}

					li {
						list-style: none;
						margin: 5px 0;
					  }
				
					  a {
						text-decoration: none;
						color: blue;
					  }
				
					  a:hover {
						opacity: 0.6;
					  }

					  .nextAsync__wrapper {
						  border: 1px solid #e0e0e0;
					  }
				`}</style>
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