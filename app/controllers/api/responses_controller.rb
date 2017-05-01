class Api::ResponsesController < ApplicationController

def index
  if params[:writerId]
    responses = Response.where(writer_id: params[:writerId])
  else
    responses = Response.where(story_id: params[:storyId])
  end
  @responses = responses
  render :index
end

def create
  @response = Response.new(response_params)
  if current_user.id == @response.writer_id
    if @response.save
      render :show
    else
      render json: @response.errors.full_messages, status: 422
    end
  else
    render json: 'Invalid response'
  end
end

def show
  @response = Response.find(params[:id])
end

def update
  @response = Response.find(params[:this_id])
  if current_user.id == @response.writer_id
    if @response.update(response_params)
      render :show
    else
      render json: @response.errors.full_messages, status: 422
    end
  else
    render json: 'Invalid edit'
  end
end

def destroy
  
end

private

def response_params
  params.require(:response).permit(:writer_id, :story_id, :in_response_id, :body, :date)
end

end
