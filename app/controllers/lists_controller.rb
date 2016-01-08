class ListsController < ApplicationController

  def index
    @todos = List.all
  end

  def new
    @single_todo = List.new
  end

  def create

  end

end