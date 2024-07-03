
import { useDispatch } from 'react-redux';
import { setStatusFilter } from "../../redux/filterSlice";

export const ContactFilter = () => {

    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(setStatusFilter(e.target.value))
    };

    return (
            <input
                className=""
                type="search"
                name="filter"
                onChange={onChange}
                placeholder="Search..."
            ></input>
            
    );
};