class Api::TopicsController < ApplicationController

  def index
    @topics = Topic.all
    render :index
  end

end
