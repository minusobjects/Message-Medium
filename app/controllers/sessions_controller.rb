class SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(params[:user][:username],params[:user][:password])
    login(user) if user
  end

  def destroy
    logout
  end

end
