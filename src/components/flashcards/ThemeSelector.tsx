import React from 'react'
import style from './FlashCards.module.css'

type ThemeSelectorPropsType = {
    selectedTheme: string,
    themes: string[],
    handleThemeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
}

const ThemeSelector: React.FC<ThemeSelectorPropsType> = (props) => {
    return (
        <div className={style.selectBox}>
            <select className={style.themeSelector}
                    value={props.selectedTheme}
                    onChange={props.handleThemeChange}>
                {props.themes.map(theme => (
                    <option key={theme} value={theme}>{theme}</option>
                ))}
            </select>
        </div>
    )
}

export default ThemeSelector