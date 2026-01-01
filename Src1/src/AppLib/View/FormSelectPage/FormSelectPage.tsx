import { useState } from 'react';
import { AppItemSelectPage } from '../../Component/ItemSelectPage/ItemSelectPage';
import { AppButton } from '../../Component/Button/Button';

import './FormSelectedPage.module.style.css';

const PAGE_OPTIONS = [
    { label: "Page 1" },
    { label: "Page 2" },
    { label: "Page 3" },
    { label: "Page 4" },
    { label: "Page 5" },
    { label: "Page 6" },
];

export function AppViewFormSelectPage() {
    const [selectedPages, setSelectedPages] = useState<number[]>([]);

    const allPagesChecked = PAGE_OPTIONS.length > 0 &&
        selectedPages.length === PAGE_OPTIONS.length;

    const handleAllPagesClick = () => {
        if (allPagesChecked) {
            setSelectedPages([]);
        } else {
            setSelectedPages(PAGE_OPTIONS.map((_, idx) => idx));
        }
    };

    const handleItemClick = (idx: number) => {
        setSelectedPages(prev =>
            prev.includes(idx)
                ? prev.filter(i => i !== idx)
                : [...prev, idx]
        );
    };

    return (
        <div className='app-view-form-select-page'>
            <div
                className='app-view-form-select-page-all-pages'
                onClick={handleAllPagesClick}
                style={{ cursor: 'pointer', userSelect: 'none' }}
            >
                <AppItemSelectPage
                    checked={allPagesChecked}
                    label="All pages"
                />
            </div>
            <div className='app-view-form-divider' />
            <div className='app-view-form-select-page-options-list'>
                {PAGE_OPTIONS.map((item, idx) => (
                    <div
                        key={item.label}
                        onClick={() => handleItemClick(idx)}
                    >
                        <AppItemSelectPage
                            checked={selectedPages.includes(idx)}
                            label={item.label}
                        />
                    </div>
                ))}
            </div>
            <div className='app-view-form-divider' />
            <div className='app-view-form-select-page-button'>
                <AppButton />
            </div>
        </div>
    );
}
