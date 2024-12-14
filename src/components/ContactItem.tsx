import { FC } from "react";
import { Contact } from "../reducer/contactsReducer";

const ContactItem: FC<Contact> = ({firstName, lastName, phone }) => {
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phone}</td>
    </tr>
  )
}

export default ContactItem;