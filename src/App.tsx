import { useEffect, useReducer, useState } from "react";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import EditModal from "./components/EditModal";
import { Contact, contactsReducer, State } from "./reducer/contactsReducer";

const initalState: State = {
  contacts: []
};

function App() {

  const [state, dispatch] = useReducer(contactsReducer, initalState);
  const [showModal, setShowModal] = useState(false);
  const [dataToEdit, setDataToEdit] = useState<Contact | undefined>(undefined)

  useEffect(() => {
    if(!showModal) {
      setDataToEdit(undefined);
    }
  }, [showModal]);

  const toggleModal = () => {
    setShowModal((show) => !show);
  }

  const handleEdit = (id: number) => {
    setDataToEdit(state.contacts.find((contact) => contact.id === id));
    toggleModal();
  }

  console.log('state', state);
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <ContactForm
          dispatch={dispatch}
          dataToEdit={dataToEdit}
          toggleModal={toggleModal}
        />
        <hr />
        {state.contacts.length > 0 && (
          <ContactList 
            contacts={state.contacts}
            handleEdit={handleEdit}
            dispatch={dispatch}
          />
        )}
      </div>
      <EditModal
        showModal={showModal}
        dataToEdit={dataToEdit}
        toggleModal={toggleModal}
        dispatch={dispatch}
      />
    </div>
  );
};

export default App;