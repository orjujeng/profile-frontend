import { Fragment } from 'react';
import { useRoutes } from 'react-router-dom';
import route from '../../routes/route';
function App() {
  const routes = useRoutes(route)
  return (
    <Fragment>
      {routes}
    </Fragment>
  )
}
export default App