import { useState } from 'react';

function ContactRow({ contact, onDelete, setContact }) {

    const [change, setChange] = useState(false);
    
    return (
        <>
            <div className="contact">
                <h4 className="contact-name">{contact.name}</h4>
                <h4 className="contact-last-name">{contact.lastName}</h4>
                <p className="contact-number">{contact.phoneNum}</p>
                <p className="contact-info">{contact.info}</p>
                <div className="contact-options">
                    <button className="contact-edit-btn" onClick={()=>setChange(true)}>Edit</button>
                    <button className="contact-delete-btn" onClick={() => onDelete(contact.id)}>Delete</button>
                </div>
            </div>
            {change && <form className="contact-change">
                <div>
                    <input 
                        type="text" 
                        value={contact.name} 
                        // onChange={(e) => setContact(e.target.value)} 
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={contact.lastName} 
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={contact.phoneNum} 
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={contact.info} 
                    />
                </div>
                <button className="save-btn" onClick={()=>setChange(false)} >Save</button>
            </form>}
        </>
    );
}

export default ContactRow;