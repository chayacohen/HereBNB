export const fetchAllBookings = data => (
    $.ajax({
        method: "GET", 
        url: `/api/bookings`, 
        data
    })
)

export const fetchBooking = bookingId => (
    $.ajax({
        method: "GET", 
        url: `/api/bookings/${bookingId}`, 
    })
)

export const updateBooking = booking => (
    $.ajax({
        method: "PATCH", 
        url: `/api/bookings/${booking.id}`, 
        data: {booking}
    })
)

export const createBooking = booking => (
    $.ajax({
        method: "POST", 
        url: `/api/bookings`, 
        data: {booking}
    })
)

export const deleteBooking = bookingId => (
    $.ajax({
        method: "DELETE", 
        url: `/api/bookings/${bookingId}`, 
    })
)