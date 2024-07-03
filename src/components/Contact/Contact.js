// import { Button } from '../Button/Button';
import { useDispatch } from 'react-redux';
import { deleteContact } from "../../redux/operation";

export const Contact = ({ contact }) => {

    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(contact.id));
    
    return (
        <div>
            <p>{contact.name} | {contact.phone}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}