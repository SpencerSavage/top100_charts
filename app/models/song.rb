class Song < ApplicationRecord
  belongs_to :artist

  validates :title, :album, :length, presence: true
end
