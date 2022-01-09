class Api::UsersController < ApplicationController

    before_action :ensure_logged_in, only: [:update]
    before_action :ensure_logged_out, only: [:create]

    def index 
        @users = User.all
    end 

    def email 
        @user = User.find_by_email(params[:email])
        render :email
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
        if @user && @user.update(user_params)
            render :show 
        elsif !@user 
            render json: ['Cannot locate user'], status: 404
        else 
            render json: @user.errors.full_messages, status: 422
        end 
    end 
    
    def show 
        @user = selected_user
        if @user 
            render :show
        else 
            debugger
            render json: ['Cannot locate user'], status: 404
        end 
    end 

    # def destroy 
    #     @user = selected_user
    #     if @user 
    #         @user.destroy 
    #         render :show 
    #     else 
    #         render json: ["Cannot locate user"], status: 404
    #     end 
    # end 


    private 

    def selected_user 
       User.find(params[:id])
    end 

    def user_params 
        params.require(:user).permit(:email, :password, :first_name, :last_name, :about, :location, :work, :photo)
    end 


end
