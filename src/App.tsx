import { useReducer } from "react";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
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
        <hr />
        {state.contacts.length > 0 && <ContactList contacts={state.contacts} />}
      </div>
    </div>
  );
};

export default App;