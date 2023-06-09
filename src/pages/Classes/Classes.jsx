import React from 'react';
import useClasses from '../../Hooks/useClasses';
import ClassCard from '../classCard/ClassCard';

const Classes = () => {
    const [classes, loading] = useClasses();
    return (
        <div className='my-16'>
            <div className='grid grid-cols-2 gap-6'>
                {
                    classes.map(singleClass => <ClassCard
                        key={singleClass._id} singleClass={singleClass}
                    >
                    </ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;