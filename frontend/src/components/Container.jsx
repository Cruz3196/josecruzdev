import React from 'react';

const Container = ({children}) => {
    return (
        <div className="container mx-auto px-8 sm:px-10 lg:px-12 bg-base-100 overflow-x-hidden">
            {children}
        </div>
    )
}

export default Container