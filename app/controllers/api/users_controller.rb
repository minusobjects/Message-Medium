class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      # note: going to show page, here
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    render :show
  end

  def update
    # modify user info. TK.
  end

  def destroy
    # delete user. TK.
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :name, :bio, :photo)
  end

end
