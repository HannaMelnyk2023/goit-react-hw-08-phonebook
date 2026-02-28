import { useDispatch } from 'react-redux';

export default function Filter() {
    const dispatch = useDispatch();
    return (
        <label>
            Find contacts by name
            <input
                type="text"
                onChange={e => dispatch({ type: 'contacts/setFilter', payload: e.target.value })}
            />
        </label>
    );
}