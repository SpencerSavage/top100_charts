class Billboard < ApplicationRecord
  has_many :artists, dependent: :destroy

  validates :genre, :desc, presence: true
  validates :desc, length: { in: 10...50 }
end
