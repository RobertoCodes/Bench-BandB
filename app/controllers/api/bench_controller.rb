class Api::BenchController < ApplicationController

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :show
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end


  def index
    minseats = params[:minSeats]
    maxseats = params[:maxSeats]
      if minseats == ""
        minseats = "0"
      end
      if maxseats == ""
        maxseats = "10000"
      end

    @benches = Bench.in_bounds(params[:bounds], minseats, maxseats)

    render :index
  end

  def show
    @bench = Bench.find(params[:id])
  end



  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating)
  end

end
