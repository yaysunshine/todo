class ListsController < ApplicationController

  def index
    @todos = List.all
  end

  def new

  end

  def create
    @single_todo = List.create(list_params)
    # @single_todo.item = params[:item]
    redirect_to lists_url
  end

  private
    def list_params
      params.require(:list).permit(:item, :done)
    end

end
