class Artist < ApplicationRecord
  belongs_to :billboard
  has_many :songs, dependent: :destroy

  validates :name, :listeners, presence: true
  validates :listeners, numericality: true
end
