class Api::GoalsController < ApplicationController
  before_action :set_user
  before_action :set_goal, only: [:show, :update, :destroy ]
  
  def index
    render json: @current_user.goals
  end

  def show
    render json: @goal
  end

  def create
    @goal = @current_user.goals.new(goal_params)
    if @goal.save
      render json: @goal
    else
      render json: { errors: @goal.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @goal.update(goal_params)
      render json: @goal
    else
      render json: { errors: @goal.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @goal.destroy
    render json: { message: 'Goal Destroyed' }
  end


  private 

    def set_goal
      @goal = @current_user.goals.find(params[:id])
    end

    def set_user
      @current_user = User.find(params[:user_id])
    end

    def goal_params
      params.require(:goal).permit(:new_goal, :diff, :accomp)
    end
end
