Rails.application.routes.draw do
  root to: "static_pages#root"
  devise_for :users

  namespace :api do
    resources :stories
  end
end
