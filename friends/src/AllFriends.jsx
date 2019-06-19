import React from 'react'

function AllFriends(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.email}</p>
        </div>
    )
}

export default AllFriends
