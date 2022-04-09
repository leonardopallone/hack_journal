class Goal < ApplicationRecord
  belongs_to :user

  validates :new_goal, :diff, presence: true
  
end
