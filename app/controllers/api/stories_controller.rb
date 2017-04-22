class Api::StoriesController < ApplicationController

def index
  # returns title, description, etc. but NOT the body
  stories = Story.all

  if params[:authorId]
      stories = stories.where(author_id: params[:authorId])
    end
    @stories = stories
    render :index
end

def create
  @story = Story.new(story_params)
  if current_user.id == @story.author_id
    if @story.save
      # is this render right?
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  else
    # only if someone's maliciously using the URL
    render json: 'Invalid post'
  end
end

def show
  @story = Story.find(params[:id])
end

def update
  # debugger
  @story = Story.find(params[:story][:id])
  if current_user.id == @story.author_id
    if @story.update(story_params)
      # is this render right?
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  else
    # only if someone's maliciously using the URL
    render json: 'Invalid edit'
  end
end

def destroy
  # delete story
  # don't forget to check current user?
end

private

def story_params
  # need to have author id in params?
  params.require(:story).permit(:author_id, :title, :description, :body, :date, :topic_id, :main_image)
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


# if (params[:minSeating] && params[:maxSeating])
#     benches = benches.where(seating: seating_range)
#   end
#   @benches = benches.includes(:reviews, :favorite_users)
# debugger
