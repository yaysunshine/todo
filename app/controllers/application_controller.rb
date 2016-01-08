class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index

  end

  # def create
  #   @item = List.new(params[:item])
  #   p "*" * 100
  #   p params
  #   p "*" * 100
  #   @item.save!
  #   redirect_to lists_url
  # end

  # def show
  #   @todos = List.all
  # end

  # private
  #   def list_params
  #     params.require(:list).permit(:item, :done)
  #   end

end
