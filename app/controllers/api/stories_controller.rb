class Api::StoriesController < ApplicationController

def index
  # returns title, description, etc. but NOT the body
  stories = Story.all.includes(:likes, :likers, :author, :topic)

  if params[:authorId]
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

end

private

def story_params
  params.require(:story).permit(:author_id, :title, :description, :body, :date, :topic_id, :main_image)
end

end
