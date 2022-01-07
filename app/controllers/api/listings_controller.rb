class Api::ListingsController < ApplicationController

    before_action :ensure_logged_in, only: [:update, :create, :destroy]

    def index 
        @listings = Listing.all
    end 

    def show 
        @listing = selected_listing
    end 

    def create 
        @listing = Listing.new(listing_params)
        if @listing.save
            render :show
        else 
            render json: @listing.errors.full_messages
        end 
    end 

    def update 
        @listing = selected_listing
        if @listing && @listing.update(listing_params)
            render :show
        elsif !@user 
            render json: ['Cannot locate listing']
        else 
            render json: @listing.errors.full_messages
        end 
    end 

    def destroy 
        @listing = selected_listing
        if @listing 
            @listing.destroy 
            render :index 
        else 
            render json: ["Cannot locate user"], status: 404
        end 
    end 

    private 
    def selected_listing
        Listing.with_attached_photos.find(params[:id])
    end 

    def listing_params 
        params.require(:listing).permit(:title, :about, :host_id, :city, :state, :zip_code, :pets_allowed, :num_beds, photos: [])
    end 
end 