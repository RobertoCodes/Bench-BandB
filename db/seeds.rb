# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Bench.destroy_all

b1 = Bench.create!(description: "Great Bench. Super, really.", lat: 40.7143, lng: -74.0079)
b2 = Bench.create!(description: "The best Bench. Awesome, really.", lat: 40.7183, lng: -74.0096)
b3 = Bench.create!(description: "A sublime bench in the heart of the city. Super, really.", lat: 40.7176, lng: -74.0054)
b4 = Bench.create!(description: "Your behind never felt better.", lat: 40.7133, lng: -74.0098)
