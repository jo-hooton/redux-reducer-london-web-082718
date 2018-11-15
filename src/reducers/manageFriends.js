export function manageFriends(state = { numberOfFriends: 0,}, action){
    switch(action.type) {
        case 'ADD_FRIEND':
        return (
            {...state,
                friends: [
                    ...state.friends,
                    action.friend
                ]
            }
        )

        case 'REMOVE_FRIEND':
        const deleteId = state.friends.findIndex(friend => friend.id === action.id)
        return (
            {...state,
                friends: [
                    ...state.friends.slice(0, deleteId),
                    ...state.friends.slice(deleteId +1)
                ]
            }
        )
        default:
        return state;
    }
}
