import MainLayout from "./layout/MainLayout";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <MainLayout>
      <Navbar />
      <HomePage />
    </MainLayout>
  );
};

export default App;