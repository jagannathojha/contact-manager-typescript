import { useReducer } from "react";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import { contactsReducer, State } from "./reducer/contactsReducer";

const initalState: State = {
  contacts: []
};

function App() {

  const [state, dispatch] = useReducer(contactsReducer, initalState);
  console.log('state', state);
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <ContactForm dispatch={dispatch} />
      </div>
    </div>
  );
};

export default App;