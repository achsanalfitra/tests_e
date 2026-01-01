import './Checkbox.module.style.css'
import { useState } from 'react';
import util from './Checkbox.module.util';

interface AppCheckboxProps {
    checked?: boolean;
    onChange?: () => void;
}


export function AppCheckbox({ checked = false, onChange }: AppCheckboxProps) {
    const checkmarkColorDefault = '#FFFFFF';
    const checkmarkColorHover = '#E3E3E3';
    const checkmarkColorPressed = '#878787';
    const checkmarkColorActive = '#FFFFFF';

    const backgroundColorDefault = '#FFFFFF';
    const backgroundColorHover = '#FFFFFF';
    const backgroundColorChecked = '#2469F6';
    const backgroundColorCheckedHover = '#5087F8';

    const checkmarkPath = util.getCheckmarkPath();
    const checkmarkWidth = util.getCheckmarkWidth();
    const checkmarkHeight = util.getCheckmarkHeight();
    const checkmarkViewBox = util.getCheckmarkViewBox();
    const checkmarkFill = util.getCheckmarkFill();
    const checkmarkNamespace = util.getCheckmarkNamespace();
    const checkmarkStrokeLinecap = util.getCheckmarkStrokeLinecap();

    const [hovered, setIsHovered] = useState(false);
    const [pressed, setIsPressed] = useState(false);

    /*
    probably need to cache the colours and these ternary solvers in prod so that it doesn't bottle the perf
    */
    const checkmarkColorOnHover = hovered ? checkmarkColorHover : checkmarkColorDefault;
    const checkmarkColorOnPressed = pressed ? checkmarkColorPressed : checkmarkColorOnHover;
    const checkmarkStrokeColor = checked ? checkmarkColorActive : checkmarkColorOnPressed;

    const backgroundColorOnHover = checked ? backgroundColorCheckedHover : backgroundColorHover;
    const backgroundColor = checked ? backgroundColorChecked : backgroundColorDefault;

    const style = {
        '--app-checkbox-background-color': backgroundColor,
        '--app-checkbox-background-color-hover': backgroundColorOnHover,
    } as React.CSSProperties;

    return (
        <div
            className="app-checkbox"
            style={style}
            onClick={onChange}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
        >
            <svg
                width={checkmarkWidth}
                height={checkmarkHeight}
                viewBox={checkmarkViewBox}
                fill={checkmarkFill}
                xmlns={checkmarkNamespace}
            >
                <path
                    d={checkmarkPath}
                    stroke={checkmarkStrokeColor}
                    strokeLinecap={checkmarkStrokeLinecap}
                />
            </svg>
        </div>
    );
}
