class Api::FollowingsController < ApplicationController

  def index
    if params[:followerId]
      followings = Following.where(follower_id: params[:followerId])
    else params[:followingId]
      followings = Following.where(following_id: params[:followingId])
    end
    @followings = followings
    render :index
  end

  def show
    render :show
  end

  def create
    @following = Following.new(following_params)
      if @following.save
        render :show
      else
        render json: @following.errors.full_messages, status: 422
      end
  end

  def destroy
    @following = Following.where(follower_id: params[:followerId]).where(following_id: params[:followingId]).first
    Following.destroy(@following.id)
    render :show
  end

  private

  def following_params
    params.require(:following).permit(:follower_id, :following_id)
  end

end
