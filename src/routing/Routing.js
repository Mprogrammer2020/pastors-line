import { Route, Routes } from "react-router-dom"
import { CommonRoute } from "./CommonRoute"

export const Routing = () => {
    return (
        <Routes>
            {/* Used for multiple component */}
            {CommonRoute.map((d, i) => <Route key={i} path={d.path} element={d.element} />)}
        </Routes>
    )
}