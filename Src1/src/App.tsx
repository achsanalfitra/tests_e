import { AppButton } from "./AppLib/Component/Button/Button";
import { AppLayout } from "./AppLib/Component/Layout/Layout";

function App() {
  const child = AppButton();
  return (
    <>
      <AppLayout children={child}/>
    </>
  );
}

export default App;
