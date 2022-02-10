class Api::BookingsController < ApplicationController

    def index
        guest ? @bookings = Booking.all.where(user_id: guest) : Booking.all 
    end 

    def show 
        @booking - selected_booking
    end 

    def create 
        @booking = Booking.new(booking_params)
        if (@booking.save)
            render :show 
        else 
            render json: @booking.errors.full_messages
        end 
    end 

    def update 
        @booking = selected_booking
        if @booking.update(booking_params)
            render :show
        else 
            render json: @booking.errors.full_messages
        end 
    end
    
        def destroy 
        @booking = selected_booking
        if @booking 
            @booking.destroy 
        else 
            render json: ["Cannot locate booking"], status: 404
        end 
    end 

    def booking_params 
        params.require(:booking).permit(:listing_id, :user_id, :start_date, :end_date, :price, :adults, :children, :infants)
    end 

    def guest 
        params[:guest]
    end

    def selected_booking 
        Booking.find(params[:id])
    end 
end 