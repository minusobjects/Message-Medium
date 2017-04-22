class Api::StoriesController < ApplicationController

def index
  # returns title, description, etc. but NOT the body
  @stories = Story.all
end

def create
  @story = Story.new(story_params)
  if @story.save
    render 'api/stories/#{story.id}'
  else
    render json: @story.errors.full_messages, status: 422
  end
end

def show
  @story = Story.find(params[:id])
end

def update
  # edit story
end

def destroy
  # delete story
  # don't forget to check current user
end

private

def story_params
  params.require(:story).permit(:title, :description, :body, :date, :topic_id, :main_image)
end

end



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
