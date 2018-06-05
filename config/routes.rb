Rails.application.routes.draw do
  resources :gamers
  root 'home#index'

  get 'home/profil', to: 'home#profil'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
