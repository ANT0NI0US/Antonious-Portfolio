import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import ExperiencesDetails from "./pages/experiencesDetails";
import Spinner from "./ui/spinner";
import PageNotFound from "./layout/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/experiences/:id" element={<ExperiencesDetails />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
