# == Schema Information
#
# Table name: responses
#
#  id             :integer          not null, primary key
#  writer_id      :integer          not null
#  story_id       :integer
#  body           :text             not null
#  date           :string
#  in_response_id :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Response < ApplicationRecord

  validates :writer_id, :body, presence: true

  belongs_to :writer,
    foreign_key: :writer_id,
    class_name: 'User'

  belongs_to :story,
    foreign_key: :story_id,
    class_name: 'Story',
    optional: true

  has_many :child_responses,
    foreign_key: :in_response_id,
    class_name: 'Response'

  belongs_to :parent_response,
    foreign_key: :in_response_id,
    class_name: 'Response',
    optional: true

  has_many :likers,
    foreign_key: :liker_id,
    class_name: 'Like'

  has_many :likes,
    through: :likers

end
