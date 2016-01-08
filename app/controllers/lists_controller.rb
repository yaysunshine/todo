class ListsController < ApplicationController

  def index
    @todos = List.all
  end

  def new
    @single_todo = List.create(params[:item])
    p "*" * 100
    p params
  end

  def create

  end

end
