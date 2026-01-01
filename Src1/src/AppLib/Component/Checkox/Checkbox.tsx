import './Checkbox.module.style.css'
import { useState } from 'react';
import util from './Checkbox.module.util';

interface AppCheckboxProps {
    checked?: boolean;
    hoverFromParent?: boolean;
    pressedFromParent?: boolean;
}


export function AppCheckbox({ checked = false, hoverFromParent, pressedFromParent }: AppCheckboxProps) {
    const checkmarkColorDefault = '#FFFFFF';
    const checkmarkColorHover = '#E3E3E3';
    const checkmarkColorPressed = '#878787';
    const checkmarkColorActive = '#FFFFFF';

    const backgroundColorDefault = '#FFFFFF';
    const backgroundColorHover = '#FFFFFF';
    const backgroundColorChecked = '#2469F6';
    const backgroundColorCheckedHover = '#5087F8';


    const checkboxShadowActive = '0 0 0 3px #2469f619';
    const checkboxBorderDefault = '1px solid transparent';
    const checkboxBorderHover = '1px solid #BDBDBD';
    const checkboxBorderActive = '1px solid #BDBDBD';

    const checkmarkPath = util.getCheckmarkPath();
    const checkmarkWidth = util.getCheckmarkWidth();
    const checkmarkHeight = util.getCheckmarkHeight();
    const checkmarkViewBox = util.getCheckmarkViewBox();
    const checkmarkFill = util.getCheckmarkFill();
    const checkmarkNamespace = util.getCheckmarkNamespace();
    const checkmarkStrokeLinecap = util.getCheckmarkStrokeLinecap();

    const [stateHover, setIsHovered] = useState(false);
    const [statePressed, setIsPressed] = useState(false);

    const hovered = stateHover || hoverFromParent;
    const pressed = statePressed || pressedFromParent;

    /*
    probably need to cache the colours and these ternary solvers in prod so that it doesn't bottle the perf
    */
    const checkmarkColorOnHover = hovered ? checkmarkColorHover : checkmarkColorDefault;
    const checkmarkColorOnPressed = pressed ? checkmarkColorPressed : checkmarkColorOnHover;
    const checkmarkStrokeColor = checked ? checkmarkColorActive : checkmarkColorOnPressed;

    const backgroundColorOnChecked = checked ? backgroundColorChecked : backgroundColorDefault;
    const backgroundColorCheckedOnHover = checked ? backgroundColorCheckedHover : backgroundColorHover;
    const backgroundColor = pressed ? checked ? backgroundColorChecked : backgroundColorDefault : hovered ? backgroundColorCheckedOnHover : backgroundColorOnChecked;

    const checkboxBorderOnHover = hovered ? checkboxBorderHover : checkboxBorderDefault;
    const checkboxBorderOnPressed = pressed ? checkboxBorderActive : checkboxBorderOnHover;
    const checkboxBorder = checked ? checkboxBorderDefault : checkboxBorderOnPressed;

    const checkboxShadow = pressed ? checkboxShadowActive : 'none';

    const style = {
        '--app-checkbox-background-color': backgroundColor,
        '--app-checkbox-active-shadow': checkboxShadow,
        '--app-checkbox-border': checkboxBorder,
    } as React.CSSProperties;

    return (
        <div
            className="app-checkbox"
            style={style}
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
