import { useState } from 'react';

function NewContact({ onAdd }) {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [info, setInfo] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!lastName) {
            alert('Please add Last Name');
            return;
        }
        onAdd({ name, lastName, phoneNum, info });

        setName("");
        setLastName("");
        setPhoneNum("");
        setInfo("");
    }

    return (
        <form className="new-contact" onSubmit={onSubmit}>
            <div>
                <label>Name:</label>
                <input 
                    type="text" 
                    placeholder="Add Name..." 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
            </div>
            <div>
                <label>Last Name:</label>
                <input 
                    type="text" 
                    placeholder="Add Last Name..."
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                />
            </div>
            <div>
                <label>Phone Number:</label>
                <input 
                    type="text" 
                    placeholder="Add Phone Number..."
                    value={phoneNum} 
                    onChange={(e) => setPhoneNum(e.target.value)} 
                />
            </div>
            <div>
                <label>Info:</label>
                <input 
                    type="text" 
                    placeholder="Add Info..."
                    value={info} 
                    onChange={(e) => setInfo(e.target.value)} 
                />
            </div>
            <button className="save-btn" type="submit">Save</button>
        </form>
    );
}
export default NewContact;