import { AppContextTheme, AppContextThemeNew } from "./AppContext/AppContextTheme";
import { AppButton } from "./AppLib/Component/Button/Button";
import { AppCheckbox } from "./AppLib/Component/Checkbox/Checkbox";
import { AppItemSelectPage } from "./AppLib/Component/ItemSelectPage/ItemSelectPage";
import { AppLayout } from "./AppLib/Component/Layout/Layout";
import { AppViewFormSelectPage } from "./AppLib/View/FormSelectPage/FormSelectPage";

function App() {
  /*setup providers start */
  AppContextThemeNew('light');
  /*setup providers end */

  const scaffoldButton = <AppButton />;
  const scaffoldCheckbox = <AppCheckbox />;
  const scaffoldItemSelectPage = <AppItemSelectPage />;
  const scaffoldFormSelectPage = <AppViewFormSelectPage />;

  return (
    <AppContextTheme>
      <AppLayout children={scaffoldFormSelectPage} />
    </AppContextTheme>
  );
}

export default App;
