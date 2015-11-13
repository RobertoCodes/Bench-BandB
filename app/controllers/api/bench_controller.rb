class Api::BenchController < ApplicationController

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :index
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end


  def index
    @benches = Bench.in_bounds(params[:bounds])
    render :index
  end


  private

    # def bench_params
    #   params.require(:bench).permit(:description, :lat, :lng)
    # end

end
