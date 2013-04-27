class Notifier < ActionMailer::Base
  default :from => "billy@mailmeonce.com"

  # send a signup email to the user, pass in the user object that contains the user's email address
  def mail_forward(email)
    mail( :to => email,
          :subject => "mail me once - env: "+ Rails.env)
  end
end