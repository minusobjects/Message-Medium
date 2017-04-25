# == Schema Information
#
# Table name: likes
#
#  id          :integer          not null, primary key
#  liker_id    :integer          not null
#  story_id    :integer          not null
#  response_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class LikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
