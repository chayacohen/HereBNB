class ApplicationController < ActionController::Base


    ## remember to change redirect if logged in / logged out based on how app develops


    helper_method :current_user, :logged_in? 

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token]) 
    end 

    # def ensure_logged_in 
    #     redirect_to root_url unless logged_in? 
    #     # '/login' 
    # end 

    # def ensure_logged_out 
    #     redirect_to root_url if logged_in? 
    # end 

    def login!(user)
        @current_user = user 
        session[:session_token] = user.reset_session_token!
    end 

    def logged_in? 
        !!current_user
    end 

    def logout! 
        current_user.reset_session_token! 
        session[:session_token] = nil 
    end 
end

