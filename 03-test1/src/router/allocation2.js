import { useRoutes } from "react-router-dom";
import Intercept from "./intercept";

export const RenderRoutes = ({routes}) => {
  let list = routes.map(route => {
    let { component, ...other } = route
    
    return {
      ...other,
      element: <Intercept {...route} />,
    }
  })
  console.log(list);
  const myRoutes = useRoutes(list)
  return myRoutes
}