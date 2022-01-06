export const findUser = email => (
    $.ajax({
        method: "GET",
        url: `/api/email`,
        data: { email }
    })
)

export const updateUser = user => (
    $.ajax({
        method: "PATCH",
        url: `/api/users/${user.id}`, 
        data: {user}    
    })
)