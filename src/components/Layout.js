import {NavLink, Outlet} from "react-router-dom";

const setActive = ({isActive}) => isActive ? 'active-link' : '';

export default function Layout() {
    return (
        <div>
            <>
                <header>
                    <div className={'wrap'}>
                        <div><NavLink to={'/'} className={setActive}><span>Home</span></NavLink></div>
                        <div><NavLink to={'/posts'} className={setActive}><span>Blog</span></NavLink></div>
                        <div><NavLink to={'/about'} className={setActive}><span>About</span></NavLink></div>
                    </div>
                </header>
                <main className={'container'}>
                    <Outlet/>
                </main>
                <footer>2022</footer>
            </>
        </div>
    );
}