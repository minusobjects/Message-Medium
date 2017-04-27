class Api::LikesController < ApplicationController

  def index
    # do I even need this?
    if params[:likerId]
      likes = Like.where(liker_id: params[:likerId])
    elsif params[:storyId]
      likes = Like.where(story_id: params[:storyId])
    else
      likes = Like.where(response_id: params[:responseId])
    end
    @likes = likes
    render :index
  end

  def show
    render :show
  end

  def create
    @like = Like.new(like_params)

      if @like.save
        # is this render right?
        render :show
      else
        render json: @like.errors.full_messages, status: 422
      end
  end

  def destroy
    if(params[:responseId])
      @like = Like.where(liker_id: params[:likerId]).where(response_id: params[:responseId]).first
    else
      @like = Like.where(liker_id: params[:likerId]).where(story_id: params[:storyId]).first
    end
    Like.destroy(@like.id)
    render :show
  end

  private

  def like_params
    params.require(:like).permit(:liker_id, :story_id, :response_id)
  end

end
