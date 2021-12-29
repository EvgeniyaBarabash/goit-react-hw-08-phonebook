import { Routes, Route } from 'react-router-dom';
import './App.css';
import ContactsView from 'views/ContactsView';
import RegisterView from 'views/RegisrterView';
import LoginView from 'views/LoginView';
import AppBar from 'components/AppBar/AppBar';
import HomeView from 'views/HomeView';
export default function App() {
  return (
    <>
    <AppBar/>
      <Routes>
      <Route path="/*" element={<HomeView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView/>} />
      </Routes>
    </>
  );
}
