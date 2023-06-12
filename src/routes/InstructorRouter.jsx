import React from 'react';
import useInstructor from '../Hooks/useInstructor';
import { useLocation } from 'react-router-dom';

const InstructorRouter = ({children}) => {
    const {user, loading} = useAuth();
    const [isInstructor, setIsInstructor] = useInstructor(); 
    const location = useLocation();
    if(loading || isInstructor){
        return <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    }
    if(user && isInstructor){
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRouter;