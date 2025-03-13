import React from 'react';

interface Props {
    message: string;
}

const ErrorHandler: React.FC<Props> = ({message}) => {
    return (<p style={{color: 'red'}}>{message}</p>)
}