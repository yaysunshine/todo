class ListsController < ApplicationController

  def index
    @todos = List.order('id ASC')
  end

  def new

  end

  def create
    # binding.pry
    @single_todo = List.create(list_params)
    # respond_to do |format|
    #   if @single_todo.save
    #     format.html { redirect_to @single_todo, notice: "todo successfully created"}
    #     format.js {}
    #     format.json { render json: @single_todo, status: :created, location: @single_todo }
    #   else
    #     format.html { render action: "new" }
    #     format.json { render json: @single_todo.errors, status: :unprocessable_entity}
    #   end
    # end
    render json: @single_todo
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
