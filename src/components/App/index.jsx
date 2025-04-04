import { Fragment } from 'react';
import { useRoutes } from 'react-router-dom';
import route from '../../routes/route';
function App() {
  const routes = useRoutes(route)
  return (
    <Fragment>
      <h1>App components</h1>
      {routes}
    </Fragment>
  )
}
export default App