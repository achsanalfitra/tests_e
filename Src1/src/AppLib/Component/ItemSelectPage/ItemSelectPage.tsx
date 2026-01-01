import { useState } from 'react';
import { AppCheckbox } from '../Checkbox/Checkbox';
import './ItemSelectPage.module.style.css';

interface AppItemSelectPageProps {
    checked?: boolean;
    label?: string;
}

export function AppItemSelectPage({ checked = false, label = 'All pages' }: AppItemSelectPageProps) {

    const [stateHover, setIsHovered] = useState(false);
    const [statePressed, setIsPressed] = useState(false);

    return (
        <div className='app-item-select-page'
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => {
                setIsHovered(false);
                setIsPressed(false);
            }}
            onPointerDown={() => setIsPressed(true)}
            onPointerUp={() => setIsPressed(false)}
        >
            <span className='app-item-select-page-label'>{label}</span>
            <div>
                <AppCheckbox checked={checked} hoverFromParent={stateHover} pressedFromParent={statePressed} />
            </div>
        </div>
    );
}