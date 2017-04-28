# == Schema Information
#
# Table name: topics
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Topic < ApplicationRecord

  validates :name, presence: true

  has_many :stories,
    foreign_key: :topic_id,
    class_name: 'Story'

end
