import { useState } from "react";
const baseURL = "https://jsonplaceholder.typicode.com/posts";

function fetchData() {
	return fetch(`${baseURL}?_limit=10`).then((res) => res.json());
}

function POST() {
	const [posts, setPost] = useState([]);

	const getData = async () => {
		const data = await fetchData();
		setPost(data);
	};

	return (
		<div>
			<h1>Get Post Data</h1>
			<button onClick={getData}>Get Post</button>
			<ul>
				{posts.length > 0 ? (
					posts.map((post) => {
						return <li key={post.id}> {post.title} </li>;
					})
				) : (
					<h2>List is Empty </h2>
				)}
			</ul>
		</div>
	);
}

export default POST;
