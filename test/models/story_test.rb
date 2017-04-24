# == Schema Information
#
# Table name: stories
#
#  id                      :integer          not null, primary key
#  author_id               :integer          not null
#  title                   :string           not null
#  description             :text
#  body                    :text             not null
#  date                    :string
#  topic_id                :integer
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  main_image_file_name    :string
#  main_image_content_type :string
#  main_image_file_size    :integer
#  main_image_updated_at   :datetime
#

require 'test_helper'

class StoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
