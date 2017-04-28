class Api::StoriesController < ApplicationController

def index
  # returns title, description, etc. but NOT the body
  stories = Story.all.includes(:likes, :likers, :author, :topic)

  if params[:authorId]
    # maybe should rearrange this conditional so we're
    # not getting every story every time?
    stories = stories.where(author_id: params[:authorId])
  elsif params[:topicId]
    stories = stories.where(topic_id: params[:topicId])
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
  @story = Story.includes(:author).find(params[:id])
end

def update
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
  # delete story. tk.
  # don't forget to check current user?
end

private

def story_params
  # need to have author id in params?
  params.require(:story).permit(:author_id, :title, :description, :body, :date, :topic_id, :main_image)
end

end



# if (params[:minSeating] && params[:maxSeating])
#     benches = benches.where(seating: seating_range)
#   end
#   @benches = benches.includes(:reviews, :favorite_users)
