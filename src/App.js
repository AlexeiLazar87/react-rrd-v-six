import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import {Home} from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/Layout";
import SinglePage from "./pages/SinglePage";
import CreateNewPost from "./pages/CreateNewPost";
import EditPost from "./pages/EditPost";
import LoginPage from "./pages/LoginPage";
import RequireAuth from "./hoc/RequireAuth";
import {AuthProvider} from "./hoc/AuthProvider";


function App() {

    return (
        <div className="App">

            <div>
                <AuthProvider>
                    <Routes>
                        <Route path={'/'} element={<Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path={'posts'} element={<Blog/>}/>
                            <Route path={'posts/:id'} element={<SinglePage/>}/>
                            <Route path={'posts/:id/edit'} element={<EditPost/>}/>
                            <Route path={'login'} element={<LoginPage/>}/>
                            <Route path={'posts/new'} element={
                                <RequireAuth>
                                    <CreateNewPost/>
                                </RequireAuth>}/>
                            <Route path={'about'} element={<About/>}/>
                            <Route path={'about-us'} element={<Navigate to={'/about'} replace/>}/>
                            <Route path={'*'} element={<PageNotFound/>}/>
                        </Route>
                        }
                    </Routes>
                </AuthProvider>
            </div>
        </div>
    );
}

export default App;
