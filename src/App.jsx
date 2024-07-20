import { BrowserRouter, Route, Routes } from "react-router-dom";
import BllLayout from "./redux/BllLayout";
import Header from "./components/header/header";
import MainPage from "./pages/mainPage";
import AboutUs from "./pages/aboutUs";
import Contacts from "./pages/contacts";
import Services from "./pages/services";
import FormPage from "./pages/formPage";

const App = () => {
  return (
    <BllLayout>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/services">
              <Route path="" element={<Services />} />
              <Route
                path="create-customer"
                element={<FormPage type="create_customer" />}
              />
              <Route
                path="update-customer"
                element={<FormPage type="update_customer" />}
              />
              <Route
                path="delete-customer"
                element={<FormPage type="delete_customer" />}
              />
              <Route
                path="create-account-customer"
                element={<FormPage type="create_account_customer" />}
              />
              <Route
                path="delete-account-customer"
                element={<FormPage type="delete_account_customer" />}
              />
              <Route path="add-funds" element={<FormPage type="add_funds" />} />
              <Route
                path="withdraw-funds"
                element={<FormPage type="withdraw_funds" />}
              />
              <Route
                path="send-funds"
                element={<FormPage type="send_funds" />}
              />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </BllLayout>
  );
};

export default App;
