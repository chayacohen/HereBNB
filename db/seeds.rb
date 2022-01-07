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
    {title: 'Beautiful ocean townhouse', about: 'This beautiful townhouse is located right acrros the street from the beach', host_id: 1, city: 'Fort Lauderdale', state: "Florida", zip_code: 10101, pets_allowed: true, num_beds: 5},
    {title: 'Cozy home in the moutains', about: 'This cozy home in the moutains has a large backyard with a fireplace, hot tub, and an indoor game room', host_id: 1, city: 'Salt Lake City', state: "Utah", zip_code: 12345, pets_allowed: true, num_beds: 8},
    {title: 'Orlando Resort Home', about: 'Newly built home! Fits up to 15 people. Its a 15 minute drive from all the parks. Perfect vacation home!', host_id: 1, city: 'Orlando', state: "Florida", zip_code: 20405, pets_allowed: true, num_beds: 10},
    {title: 'Home on the lake', about: 'This home is right on the lake!', host_id: 1, city: 'Irvine', state: "California", zip_code: 39582, pets_allowed: false, num_beds: 8},
    {title: 'Ski resort home', about: 'This home is ski on, ski off! 3 floors, hot tub, large kitchen, and a phenomonal way to spend your ski vacation.', host_id: 1, city: 'Vail', state: "Colorado", zip_code: 59305, pets_allowed: true, num_beds: 6},
    {title: '1 bedroom apartment', about: 'One bedroom apartment overlooking Central Park. Right in the heart of NYC, minutes from Times Square', host_id: 1, city: 'New York', state: "New York", zip_code: 11001, pets_allowed: true, num_beds: 2}
])