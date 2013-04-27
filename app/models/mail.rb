class Mail < ActiveRecord::Base
  attr_accessible :from, :subject, :to
end
