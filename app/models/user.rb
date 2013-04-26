class User < ActiveRecord::Base
  attr_accessible :email, :name
  validates :name,  :presence => true,
            :uniqueness => true
  validates :email, :presence => true,
            :length => { :minimum => 5 },
            :uniqueness => true
end
