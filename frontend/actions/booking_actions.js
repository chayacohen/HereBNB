import * as BookingApiUtil from '../util/booking_util';

export const RECEIVE_ALL_BOOKINGS = "RECEIVE_ALL_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
// export const RECEIVE_USER_LISTINGS = "RECEIVE_USER_LISTINGS"


const receiveAllBookings = (bookings) => ({
    type: RECEIVE_ALL_BOOKINGS,
    bookings
})

const receiveBooking = (booking) => ({
    type: RECEIVE_BOOKING,
    booking
})

const removeBooking = (bookingId) => ({
    type: REMOVE_BOOKING,
    bookingId
})

export const requestAllBookings = (data) => dispatch => {
    BookingApiUtil.fetchAllBookings(data)
        .then((bookings) => dispatch(receiveAllBookings(bookings)))
}

export const requestBooking = (bookingId) => dispatch => {
    return (
        BookingApiUtil.fetchBooking(bookingId)
            .then((booking) => {
                return (
                    dispatch(receiveBooking(booking)))
            })
    )
}

export const updateBooking = (booking) => dispatch => (
    BookingApiUtil.updateBooking(booking)
        .then((booking) => dispatch(receiveBooking(booking)))
)

export const createBooking = (booking) => dispatch => {
    return (
        BookingApiUtil.createBooking(booking)
            .then((booking) => {
                return (
                    dispatch(receiveBooking(booking)))
            })
    )
}

export const deleteBooking = (bookingId) => dispatch => (
    BookingApiUtil.deleteBooking(bookingId)
        .then(() => dispatch(removeBooking(bookingId)))
)
