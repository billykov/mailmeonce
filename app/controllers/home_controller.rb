class HomeController < ApplicationController
  def index
    Mailer.forward_mail("billykov@gmail.com");
  end
end
