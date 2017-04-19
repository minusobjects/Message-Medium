class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    # modify user info
  end

  def show
    # go to user profile page
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :name, :password)
  end

end


# lodash babel-core babel-loader babel-preset-es2015 babel-preset-react react react-dom react-redux react-router react-router-redux redux redux-thunk webpack



# bench project has a session form... maybe should try to do that on my own

# also some redirect-type stuff in the app's root.jsx

# jbuilder...? yeah need it for views.
