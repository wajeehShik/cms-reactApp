
import { Route, Routes } from "react-router-dom/dist";
import BlogAdmin from "../pages/dashborad/BlogAdmin";
import Category from "../pages/dashborad/Category";
import Dashboard from "../pages/dashborad/Dashboard";
import Notfications from "../pages/dashborad/Notfications";
import Blog from "../pages/home/Blog";
import BlogDetailsPage from "../pages/home/BlogDetailsPage";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/home/LoginPage";

let AppRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogDetailsPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashborad" element={<Dashboard />}>
                <Route path="/dashborad" element={<BlogAdmin />} />
                <Route path="/dashborad/categories" element={<Category />} />
                <Route path="/dashborad/notfications" element={<Notfications />} />
            </Route>

        </Routes>
    )

}
export default AppRoutes;