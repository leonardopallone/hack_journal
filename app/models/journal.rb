class Journal < ApplicationRecord
  belongs_to :user

  validates :date_made, :time_made, :desc, presence: true
end
