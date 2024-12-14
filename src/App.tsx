import Header from "./components/Header";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <ContactForm />
      </div>
    </div>
  );
};

export default App;