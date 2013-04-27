Mailmeonce::Application.routes.draw do
  post "recive_mails" => "mails#new"


  post "users/create" => "users#create"
  get "users/new" => "users#new"

  post "getmails" => "get_mails#save"


  get "home/index"
  root to: "home#index"

end
