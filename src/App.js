import './App.css';
import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/Layout";
import SinglePage from "./pages/SinglePage";
import CreateNewPost from "./pages/CreateNewPost";
import EditPost from "./pages/EditPost";


function App() {

    return (
        <div className="App">

            <div>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path={'posts'} element={<Blog/>}/>
                        <Route path={'posts/:id'} element={<SinglePage/>}/>
                        <Route path={'posts/:id/edit'} element={<EditPost/>}/>
                        <Route path={'posts/new'} element={<CreateNewPost/>}/>
                        <Route path={'about'} element={<About/>}/>
                        <Route path={'*'} element={<PageNotFound/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
