class ListsController < ApplicationController

  def index
    @todos = List.all
  end

  def new
    @single_todo = List.new()
    @single_todo.item = params[:item]
    @single_todo.save!
    p "*" * 100
    p params
  end

  def create
    redirect_to lists_url
  end

end
