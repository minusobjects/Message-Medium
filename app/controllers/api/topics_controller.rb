class Api::TopicsController < ApplicationController

  # as of new, no way to make a new topic except through db directly

  def index
    @topics = Topic.all
    render :index
  end

end
