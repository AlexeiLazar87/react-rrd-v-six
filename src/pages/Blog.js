import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Blog () {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    }, [])

return (
<div>
    <h1>Our Blog</h1>
    {
        posts.map(value => (
            <Link key={value.id} to={`/posts/${value.id}`}>
                <li>{value.title}</li>
            </Link>
        ))
    }
</div>
);
}