import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import Friends from './Friends'
import New from './New'

function FriendsList(props) {
    const [friends, setFriends] = useState([])

    const getData = () => {
        axiosWithAuth().get('/friends')
        .then(res => {
            setFriends(res.data)
            console.log(res.data)
        })
        .catch((err) => console.error(err.message))
    }

    useEffect(() => {
        getData()
    }, []);

    return(
        <div>
            <h1>My Friends</h1>
            <New />
            <div>
                {
                    friends.map(friend => (
                        <div>
                            <Friends name={friend.name} age={friend.age} email={friend.email} />
                        </div>
                    ))
                }
            </div>
        </div>   
    )
}

export default FriendsList