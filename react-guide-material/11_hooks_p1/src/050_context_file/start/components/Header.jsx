import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [ theme, setTheme ] = useTheme();
  
  const THEMES = ['light', 'dark', 'red'];
  
  const changeTheme = (e) => setTheme(e.target.value);

  return (
    <header className={`content-${theme}`}>
        {THEMES.map(_theme => {
          return (
            <label key={_theme}>
              <input value={_theme} type="radio" checked={theme === _theme} onChange={changeTheme} />
              {_theme}
            </label>
          );
        })}
    </header>
  );
};

export default Header;
