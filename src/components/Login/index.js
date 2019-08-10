import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import loading from '../../assets/loading.svg';
import './styles.css'
import { actionLogin } from '../../services/api-actions';

export default function Login({ history }) {
    const [loadingIco, setloadingIco] = useState(false)

    const [username, setUsername] = useState('');
    async function handleSubmit(e) {
        e.preventDefault()
        setloadingIco(true)
        const user = await actionLogin(username);
        history.push(`/user/${user}`)
    }

    return (
        <div className="login-container" >
            {
                loadingIco ?
                    <img src={loading} />
                    :
                    (<form onSubmit={handleSubmit}>
                        <img src={logo} alt="TinDev" />
                        <input
                            placeholder='Usuário do Github'
                            value={username}
                            onChange={e => { setUsername(e.target.value) }}
                            required
                        />
                        <button type='submit' >Entrar </button>
                    </form>)
            }
        </div>
    );

}