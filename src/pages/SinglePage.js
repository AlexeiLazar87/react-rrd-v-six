import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react";


export default function SinglePage() {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(value => value.json())
            .then(value => setPost(value))
    }, [id])

    return (
        <div>
            {post &&
                (<>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/edit`}><button>EDIT</button></Link>
                </>)}
        </div>
    );
}