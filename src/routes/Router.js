import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DetailsPage } from "../pages/Details/Details"
import { ErrorPage } from "../pages/Error/Error"
import { HomePage } from "../pages/Home/Home"

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route  path= '/' element={<HomePage/>}/>
                <Route path='/details/:id' element={<DetailsPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}