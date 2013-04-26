Mailmeonce::Application.routes.draw do
  post "users/create" => "users#create"
  get "users/new" => "users#new"


  get "home/index"
  root to: "home#index"

end
