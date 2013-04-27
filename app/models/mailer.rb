class Mailer < ActionMailer::Base
  default :from => "newmail@mailmeonce.com"

  # send a signup email to the user, pass in the user object that contains the user’s email address
  def forward_mail(email)
    mail( :to => email,
          :subject => "TEST" )
    end
  end
