Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:index, :create, :update, :show]
    get '/email', :to => 'users#email'
    resources :listings, only: [:index, :create, :update, :show]
    resource :session, only: [:create, :destroy]
  end 
end
