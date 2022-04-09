Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :users, except: [:index, :show, :create, :destroy, :update] do
      resources :goals 
      resources :journals
      resources :vision_boards
      end


    # resources :journals, except: [:index, :show, :create, :destroy, :update] do
    # end

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    resources :users, except: [:index, :show, :create, :destroy, :update] do
      resources :goals 
      resources :journals
      resources :vision_boards
      end


      resources :vision_boards, except: [:index, :show, :update, :create, :destroy] do
        resources :vision_items

    end

  end

end


end

