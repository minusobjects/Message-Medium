class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      # render...
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
  end

  def show
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





# session actions
# import * as APIUtil from '../util/session_api_util'
#
# export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
# export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
#
# export const signup = user => dispatch => (
#   APIUtil.signup(user)
#     .then(user => dispatch(receiveCurrentUser(user)),
#       err => dispatch(receiveErrors(err.responseJSON)))
# );
#
# export const login = user => dispatch => (
#   APIUtil.login(user)
#     .then(user => dispatch(receiveCurrentUser(user)),
#       err => dispatch(receiveErrors(err.responseJSON)))
# );
#
# export const logout = () => dispatch => (
#   APIUtil.logout().then(user => dispatch(receiveCurrentUser(null)))
# );
#
# export const receiveCurrentUser = currentUser => ({
#   type: RECEIVE_CURRENT_USER,
#   currentUser
# });
#
# export const receiveErrors = errors => ({
#   type: RECEIVE_ERRORS,
#   errors
# });


# session api util
# import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';
#
# export const login = (user) => {
#   return $.ajax({
#     method: 'POST',
#     url: '/api/session',
#     data: user
#   });
# };
#
# export const signup = (user) => {
#   return $.ajax({
#     method: 'POST',
#     url: '/api/user',
#     data: user
#   });
# };
#
# export const logout = () => {
#   return $.ajax({
#     method: 'delete',
#     url: '/api/session'
#   });
# };
