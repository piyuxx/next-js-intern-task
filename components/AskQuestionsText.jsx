import React from 'react';

const AskQuestionsText = () => {
    const textStyles = {
        fontFamily: 'Urbanist',
        fontSize: '54px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '110%',
        background: 'linear-gradient(90deg, #4E4BE4 1.04%, #E862FE 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    return (
        <h2 style={textStyles}>ask questions</h2>
    );
};

export default AskQuestionsText;
