class Api::JournalsController < ApplicationController
  before_action :set_user
  before_action :set_journal, only: [:show, :update, :destroy ]
    
    def index
      render json: @current_user.journals
    end
  
    def show
      render json: @journal
    end
  
    def create
      @journal = @current_user.journals.new(journal_params)
      if @journal.save
        render json: @journal
      else
        render json: { errors: @journal.errors }, status: :unprocessable_entity
      end
    end
  
    def update
      if @journal.update(journal_params)
        render json: @journal
      else
        render json: { errors: @journal.errors }, status: :unprocessable_entity
      end
    end
  
    def destroy
      @journal.destroy
      render json: { message: 'Journal Destroyed' }
    end
  
  
    private 
    
    def set_journal
      @journal = @current_user.journals.find(params[:id])
    end

    def set_user
      @current_user = User.find(params[:user_id])
    end

    def journal_params
      params.require(:journal).permit(:date_made, :time_made, :desc)
    end
end
