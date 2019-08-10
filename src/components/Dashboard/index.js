// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';
import { fetchAllUsers, likeInUser, dislikeInUser } from '../../services/api-actions';
import { Link } from 'react-router-dom'
import './styles.css';

export default function Dashboard({ match }) {
    const { user } = match.params;
    const [users, setUsers] = useState([])

    useEffect(() => {
        loadAllUsers()
    }, [])

    async function loadAllUsers() {
        const response = await fetchAllUsers(user);
        return response ? setUsers(response) : []
    }

    function uploadUsers(id) {
        setUsers(users.filter(user => user._id !== id))
    }
    async function handleLike(user, target) {
        await likeInUser(user, target);
        uploadUsers(target)
    }

    async function handleDislike(user, target) {
        await dislikeInUser(user, target);
        uploadUsers(target)

    }
    return (
        <div className="main-container">
            <img src={logo} alt="TinDev" /><br/>
            <Link to="/"><p className='logout'>Logout</p></Link>
            {
                users.length > 0 ?
                    (
                        <ul>
                            {users.map(currentUser => (
                                <li key={currentUser._id}>
                                    <img src={currentUser.avatar} alt={currentUser.name} />
                                    <footer>
                                        <strong>{currentUser.name}</strong>
                                        <p>
                                            {currentUser.bio}
                                        </p>
                                    </footer>
                                    <div className="buttons">
                                        <button type="button" onClick={() => { handleDislike(user, currentUser._id); loadAllUsers() }}> <img src={dislike} alt="dislike" /> </button>
                                        <button type="button" onClick={() => { handleLike(user, currentUser._id); loadAllUsers() }}> <img src={like} alt="like" /> </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )

                    :
                    <div className="notuser"> <p >Acabou :(</p></div>
            }


        </div>
    );
}