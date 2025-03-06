import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    chuildren: [{}],
  },
]);
