import {Link} from "react-router-dom";

export default function PageNotFound () {
return (
<div>
    <h1>This page doesn`t exist. Go <Link to={'/'}>home</Link></h1>
</div>
);
}