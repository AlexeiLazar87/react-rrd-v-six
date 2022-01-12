import {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import BlogFilter from "../components/BlogFilter";

export default function Blog () {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const postQuery = searchParams.get('post') || '';
    // example: URL.ru/posts?post=abc&data=qwe ...
    const latest = searchParams.has('latest');

    const startsFrom = latest ? 80 : 1;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    }, [])

return (
<div>
    <h1>Our Blog</h1>
    <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams}/>
    <Link to={'/posts/new'}>Add new post</Link>
    {
        posts.filter(
            post => post.title.includes(postQuery) && post.id >= startsFrom
        ).map(value => (
            <Link key={value.id} to={`/posts/${value.id}`}>
                <li>{value.title}</li>
            </Link>
        ))
    }
</div>
);
}