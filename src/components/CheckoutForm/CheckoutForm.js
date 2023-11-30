

import './CheckoutForm.css';
import { useState } from 'react';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name,
            phone,
            email,
        };

        onConfirm(userData);
    };

    return (
        <div className="Container">
            <form onSubmit={handleConfirm} className="Form">
                <div className="Label">
                    <label>
                        Nombre
                        <input
                            className="Input"
                            type="text"
                            value={name}
                            onChange={({ target }) => setName(target.value)}
                        />
                    </label>
                </div>
                <div className="Label">
                    <label>
                        Teléfono
                        <input
                            className="Input"
                            type="text"
                            value={phone}
                            onChange={({ target }) => setPhone(target.value)}
                        />
                    </label>
                </div>
                <div className="Label">
                    <label>
                        Email
                        <input
                            className="Input"
                            type="text"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                    </label>
                </div>
                <div className="Label">
                    <button type="submit" className="Button">
                        Crear Orden
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;

