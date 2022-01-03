class Api::UsersController < ApplicationController

    # before_action :ensure_logged_in, only: [:update, :show, :destroy, :index]
    # before_action :ensure_logged_out, only: [:create]

    def index 
        @user = User.find_by_email(params[:email]) 
    end 

    def create 
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else 
            render json: @user.errors.full_messages, status: 422
        end 
    end 

    def update 
        @user = selected_user 
        if @user && @user.update_attributes(user_params)
            render :show 
        elsif !@user 
            render json: ['Cannot locate user'], status: 404
        else 
            render json: @user.errors.full_messages, status: 422
        end 
    end 
    
    def show 
        @user = selected_user
    end 

    def destroy 
        @user = selected_user
        if @user 
            @user.destroy 
            render :show 
        else 
            render json: ["Cannot locate user"], status: 404
        end 
    end 


    private 

    def selected_user 
        User.find(params[:id])
    end 

    def user_params 
        params.require(:user).permit(:email, :password, :first_name, :last_name, :about, :location, :work)
    end 


end
