class ListsController < ApplicationController

  def index
    @todos = List.all
  end

  def new

  end

  def create
    # binding.pry
    @single_todo = List.create(list_params)
    respond_to do |format|
      format.json { render :json => {item: @single_todo } }
    end
    # if @single_todo.save
    #   render :json => {
    #     item: @single_todo
    #   }
    # end
  end

  def update
    @done = List.find(params[:id])
    if @done.update_attributes(:done => true)
      redirect_to lists_url
    end

    # respond_to do |format|
    #   format.html { redirect_to lists_url }
    #   format.js
    #   format.json { render json: @done}
    # end
  end

  private
    def list_params
      params.require(:list).permit(:item, :done)
    end
end
