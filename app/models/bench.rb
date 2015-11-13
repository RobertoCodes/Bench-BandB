class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds (bounds)
    Bench.where(["lng BETWEEN ? AND ? AND lat BETWEEN ? AND ?", bounds['southWest']['lng'], bounds['northEast']['lng'],
    bounds['southWest']['lat'], bounds['northEast']['lat']])
  end

end
