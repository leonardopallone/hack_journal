class Api::VisionBoardsController < ApplicationController


  before_action :set_user
  before_action :set_vision_board, only: [:show, :update, :destroy ]
  
  def index
    render json: @current_user.vision_boards
  end

  def show
    render json: @vision_board
  end

  def create
    @goal = @current_user.vision_board.new(vision_board_params)
    if @vision_board.save
      render json: @vision_board
    else
      render json: { errors: @vision_board.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @vision_board.update(vision_board_params)
      render json: @vision_board
    else
      render json: { errors: @vision_board.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @vision_board.destroy
    render json: { message: 'Vision Destroyed' }
  end


  private 

    def set_vision_board
      @vision_board = @current_user.vision_board.find(params[:id])
    end

    def set_user
      @current_user = User.find(params[:user_id])
    end

    def vision_board_params
      params.require(:vision_board).permit(:new_vision_board, :title, :favorite, :current)
    end



end
