class ListsController < ApplicationController

  def index
    @todos = List.all
  end

  def new
    @single_todo = List.new
    @single_todo.save!
    redirect_to lists_url
  end

  def create

  end

end
