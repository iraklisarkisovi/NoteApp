import Header from '../components/header';
import { Outlet } from 'react-router';

const ParentRoute = () => {
    

  return (
    <>
        <Header CloseModal={() => {}}/>
        <Outlet/>
    </>
  );
};

export default ParentRoute;