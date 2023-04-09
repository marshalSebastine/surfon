import { useRef, useState } from 'react';
import './SearchBar.css';

const SearchBar = ({setTextFieldValue,textFieldValue}) => {

    const checkBox = useRef()
    const inputField = useRef()

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        if (!isChecked) {
            inputField.current.focus()
        }else{setTextFieldValue('');}
        setIsChecked(!isChecked);
    };
    const handleTextFieldChange = (evnt) => {
        setTextFieldValue(evnt.target.value)
    }
    return (
        <div className='search-container'>
            <div className="search">
                <input ref={checkBox} checked={isChecked}
                       onChange={handleCheckboxChange} type="checkbox" id="trigger"
                       className="search__checkbox" />
                <label className="search__label-init" htmlFor="trigger"></label>
                <label className="search__label-active" htmlFor="trigger"></label>
                <div className="search__border"></div>
                <input ref={inputField} disabled={false}
                       value={textFieldValue} onChange={handleTextFieldChange}
                       type="text" className="search__input" />
                <div className="search__close"></div>
            </div>
        </div>
    )
}

export default SearchBar