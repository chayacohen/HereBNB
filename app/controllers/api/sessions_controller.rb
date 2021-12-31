class Api::SessionsController < ApplicationController
    
    # before_action :ensure_logged_in, only: [:destroy]
    # before_action :ensure_logged_out, only: [:create]

    def create 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user 
            login!(@user)
            render '/api/users/show'
        else 
            render json: ['Invalid Credentials'], status: 401
        end 
    end 

    def destroy 
        if !current_user
            render json: ['No user logged in'], status: 404
        else 
            logout! 
            render json: {}
        end 
    end 
end
