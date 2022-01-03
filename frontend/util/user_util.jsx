export const findUser = email => (
    $.ajax({
        method: "GET",
        url: `/api/users`,
        data: { email }
    })
)
