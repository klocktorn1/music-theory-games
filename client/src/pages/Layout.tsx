import { NavLink, Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <>
            <div>
                <header className="bg-amber-500">
                    <ul className="flex gap-5 justify-end p-5">
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/parallels_exercise"}>Parallels Exercise</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/note_exercise"}>Note Exercise</NavLink>
                        </li>
                    </ul>
                </header>
                <main><Outlet></Outlet></main>
                <footer></footer>
            </div>
        
        
        </>
    )
}