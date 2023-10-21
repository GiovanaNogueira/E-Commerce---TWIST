// import numeral from "numeral";
import { NavLink, Outlet, RouterProvider, createBrowserRouter} from "react-router-dom";
import { PageCat } from "./Page";
import { Carrinho } from "./Carrinho";
import { Favoritos } from "./Favoritos";
import { Header } from "./Header";
import { Detalhes } from "./Detalhes";

function App() {
    

    const Navbar = () =>{
        return(
            <div className = "navbar">
                <NavLink className= {({isActive}) => isActive? "navbar_item-clicked" : "navbar_item"} to= '/'>Todos</NavLink>
                <NavLink className= {({isActive}) => isActive? "navbar_item-clicked" : "navbar_item"} to = '/necessarios'>Necessarios</NavLink>
                <NavLink className= {({isActive}) => isActive? "navbar_item-clicked" : "navbar_item"} to = '/moveis'>Móveis</NavLink>
                <NavLink className= {({isActive}) => isActive? "navbar_item-clicked" : "navbar_item"} to = '/celular'>Celular</NavLink>
            </div>
        )
    }

    const HeaderLayout = () => {
        return(
            <div>
                <Navbar/>
                <Outlet/>
            </div>
        )
    }

  

    const router = createBrowserRouter([
        {
            element:
                <div>
                    <Header/>
                    <HeaderLayout/>
                </div>,
                
            children: [
                {path: '/', element: <PageCat/>},
                {path: '/:categoria', element: <PageCat/>},
                {path:'/carrinho', element: <Carrinho/> },
                {path:'/favoritos', element: <Favoritos/> },
                {path:'/:categoria/:id', element: <Detalhes/>}
            ]
        }
    ])

    return (
        <div>
            <RouterProvider router ={router}/>
        </div>

    );
    }


export default App;

