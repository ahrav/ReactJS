import React from 'react';

const user = props => (
    <div>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
        {/* {//styling goes below} */}
        <style jsx>{`
            
        `}</style>
    </div>
);

export default user;