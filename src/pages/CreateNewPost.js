import useAuth from "../hook/useAuth";
import {useNavigate} from "react-router-dom";

export default function CreateNewPost () {
    const {signout} = useAuth();
    const navigate = useNavigate();

return (
<div>
    <h2>Create new post</h2>
    <button onClick={() => signout(() => navigate('/', {replace: true}))}>Log Out</button>
</div>
)
}