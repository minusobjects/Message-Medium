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

require 'test_helper'

class ResponseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
