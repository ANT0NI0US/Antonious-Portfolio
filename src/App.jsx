import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Spinner from "./ui/spinner";

const ExperiencesDetails = lazy(() => import("./pages/experiencesDetails"));
const Projects = lazy(() => import("./pages/projects"));
const PageNotFound = lazy(() => import("./layout/PageNotFound"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/experiences/:id" element={<ExperiencesDetails />} />
            <Route path="/projects/:id" element={<Projects />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
