Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:index, :create, :update, :show]
    get '/email', :to => 'users#email'
    get '/users/:id/listings', :to => 'listings#user_listings'
    resources :listings, only: [:index, :create, :update, :show, :destroy]
    resource :session, only: [:create, :destroy]
    resources :bookings
  end 
end