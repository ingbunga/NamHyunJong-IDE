import React, { useState } from 'react';

function NavigationBar({
    onExec,
    onSave,
}) {

    const btnStyle = {
        backgroundColor: '#00000000',
        color: '#a2a2a2',
        border: '0px',
        borderRight: '1px solid #a2a2a2',
        "&:hover": {
            backgroundColor: '#a2a2a2',
        }
    }

    return (
        <div style={{
            display: 'flex',
            height: '25px',
            width: '100%',
            backgroundColor: 'rgb(29,29,29)'
        }}>
            
            <MenuButton style={btnStyle} onClick={onSave}>
                save
            </MenuButton>
            <MenuButton onClick={onExec} style={btnStyle}>
                exec
            </MenuButton>
        </div>
    )
}


function MenuButton({onClick, children}) {
    const [hover, setHover] = useState(false);

    const btnStyle = {
        backgroundColor: '#00000000',
        color: '#a2a2a2',
        border: '0px',
        borderRight: '1px solid #a2a2a2',
    }

    if (hover) {
        btnStyle.cursor = 'pointer';
    }

    const toggle = () => {
        setHover(o => !o);
    }

    return (
        <button style={btnStyle} onMouseEnter={toggle} onMouseLeave={toggle} onClick={onClick}>
            {children}
        </button>
    )
}

export default NavigationBar;