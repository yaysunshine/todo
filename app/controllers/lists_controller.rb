class ListsController < ApplicationController

  def index
    @todos = List.all
  end

  def new

  end

  def create
    @single_todo = List.create(list_params)
    redirect_to lists_url
  end

  def update
    @done = List.find(params[:id])

    if @done.update_attribute(params[:done])
      redirect_to lists_url
    end
  end

  private
    def list_params
      params.require(:list).permit(:item, :done)
    end

end
