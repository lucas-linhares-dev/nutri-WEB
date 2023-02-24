import { Routes } from "react-router"
import { BrowserRouter, Route } from "react-router-dom"
import { PaginaInicial } from "../pages/paginaInicial/PaginaInicial"



export const AppRoutes = () => {
    

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/pagina-inicial" element={<PaginaInicial />} />
            </Routes>
        </BrowserRouter>
    )
}