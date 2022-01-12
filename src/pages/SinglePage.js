import {useParams, Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


export default function SinglePage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    const goBack = () => navigate(-1);
    const goHome = () => navigate('/',{replace: true});
    // bad approach. use Link!

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(value => value.json())
            .then(value => setPost(value))
    }, [id])

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <button onClick={goHome}>Go home</button>
            {post &&
                (<>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/edit`}><button>Edit</button></Link>
                </>)}
        </div>
    );
}