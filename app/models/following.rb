# == Schema Information
#
# Table name: followings
#
#  id           :integer          not null, primary key
#  follower_id  :integer          not null
#  following_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Following < ApplicationRecord
  validates :follower_id, :following_id, presence: true
end
