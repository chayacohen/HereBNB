# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Listing.destroy_all 

User.create([
    {email: 'demo@user.com', password: 'password', first_name: 'Demo', last_name: "User"},
    {email: 'john@doe.com', password: 'password', first_name: 'John', last_name: "Doe"},
    {email: 'esther@cohen.com', password: 'password', first_name: 'Esther', last_name: "Cohen"},
    {email: 'kevin@hart.com', password: 'password', first_name: 'Kevin', last_name: "Hart"},
    {email: 'sara@smith.com', password: 'password', first_name: 'Sara', last_name: "Smith"}
])

Listing.create([
    {title: 'Beautiful resort home', about: 'This beautiful townhouse is located right acrros the street from the beach', host_id: 1, city: 'Kissimmee', state: "FL", zip_code: 34747, beds: 5, price: 185, lat: 28.306627 , lng:-81.650637 , country: 'US', street: '9031 Sunset Palms Ter', guests: 10, bath: 5, place: 'house', specific: 'vacation home', privacy: 'an entire place'},
    # {title: 'Cozy home in the moutains', about: 'This cozy home in the moutains has a large backyard with a fireplace, hot tub, and an indoor game room', host_id: 1, city: 'Salt Lake City', state: "Utah", zip_code: 12345, pets_allowed: true, num_beds: 8, price: 200},
    {title: 'Orlando Resort Home', about: 'Newly built home! Fits up to 15 people. It''s a 15 minute drive from all the parks. Perfect vacation home!', host_id: 2, city: 'Reunion', state: "FL", zip_code: 34747, beds: 6, price: 350, street: '2400 Tangier Dr' , lat: 28.314926324668004, lng: -81.64713817988773, country: 'US', guests: 12 , bath: 6 , place: 'house', specific: 'vacation home', privacy: 'an entire place'},
    # {title: 'Home on the lake', about: 'This home is right on the lake!', host_id: 1, city: 'Irvine', state: "California", zip_code: 39582, pets_allowed: false, num_beds: 8, price: 300},
    {title: 'Home in the heart of Williamsburg', about: 'This home is right in the heart of Brooklyn! 3 floors, hot tub, large kitchen, and a phenomonal way to spend your NY vacation.', host_id: 1, city: 'Brooklyn', state: "NY", zip_code: 11211, beds: 6, price: 550, street: '17 Fillmore Pl', lat:40.714067, lng:73.958572, country: 'US', guests: 12 , bath: 4 , place: 'house', specific: 'Residential home', privacy: 'an entire place'},

    {title: '2 bedroom apartment', about: 'Two bedroom apartment overlooking Central Park. Right in the heart of NYC, minutes from Times Square', host_id: 1, city: 'New York', state: "NY", zip_code: 10019, country: 'US', beds: 2, guests: 4, bath: 1, price: 250, street: '1000 10th Ave' , place: "apartment" , specific: 'Condominium(condo)' , privacy: 'an entire place' , lat:40.769180, lng: -73.984892},

    {title: '2 bedroom apartment', about: 'Two bedroom apartment overlooking Central Park. Right in the heart of NYC, minutes from Times Square', host_id: 3, city: 'New York', state: "NY", zip_code: 10019, country: 'US', beds: 2, guests: 4, bath: 1, price: 250, street: '1000 10th Ave' , place: "apartment" , specific: 'Condominium(condo)' , privacy: 'an entire place' , lat:40.769180, lng: -73.984892}
])