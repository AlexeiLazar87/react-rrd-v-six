import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

    return (
        <Router>
            <div className="App">
                <div><Link to={'/'}>Home</Link></div>
                <div><Link to={'/users'}>Users</Link></div>
                <Routes>
                    <Route path={'/'} element={<h1>Home</h1>}/>
                    <Route path={'/users'} element={<h1>Users</h1>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
