import { I18nextProvider } from "react-i18next";
import { DataSources, Header } from "./components";
import i18n from "./i18n";

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Header />
        <DataSources />
      </I18nextProvider>
    </>
  );
}

export default App;
