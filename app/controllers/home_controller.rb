class HomeController < ApplicationController
  def index
    Notifier.mail_forward("billykov@gmail.com").deliver

  end
end
