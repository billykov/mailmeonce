# Load the rails application
require File.expand_path('../application', __FILE__)



# Initialize the rails application
Mailmeonce::Application.initialize!

ActionMailer::Base.smtp_settings = {
    :user_name => "app15287217@heroku.com",
    :password => "3gbxpqy9",
    :domain => "mailmeonce.herokuapp.com",
    :address => "smtp.sendgrid.net",
    :port => 587,
    :authentication => :plain,
    :enable_starttls_auto => true
}

