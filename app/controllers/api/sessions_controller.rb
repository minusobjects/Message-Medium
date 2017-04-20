class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],params[:user][:password]
    )
    if @user
      login(@user)
      render 'api/users/session_user.json.jbuilder'
    else
      render json: ["Invalid username or password."], status: 401
    end
  end

  def destroy
    if logged_in?
      @user = current_user
      logout
      # rendering basic user data on logout
      render 'api/users/session_user.json.jbuilder'
    else
      render json: ["No one to log out."], status: 404
    end
  end

end
