# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all 
Listing.destroy_all 

user_one = User.create({email: 'demo@user.com', password: 'password', first_name: 'Demo', last_name: "User", about: 'Hi! I am the demo user! Feel free to look around the website and see what there is to offer!' , location: 'Brooklyn, NY'})
user_two = User.create({email: 'john@doe.com', password: 'password', first_name: 'John', last_name: "Doe", about: 'Hi! I am John! I aim to make your vacation experience one that you will never forget!' , location: 'Orlando, FL'})
user_three = User.create({email: 'esther@cohen.com', password: 'password', first_name: 'Esther', last_name: "Cohen", about: 'Hi! I am Esther! I put so much work into all my listings! If you do choose to stay at one of our places, I will be so glad to get to know you!' , location: 'New York, NY'})
user_four = User.create({email: 'kevin@hart.com', password: 'password', first_name: 'Kevin', last_name: "Hart", about: 'Hi! I have been in the vacation rental business for 20 years. Our guests have so many good reviews on our places. We pride ourselves with creating a luxury experience!' , location: 'Los Angeles, CA'})
user_five = User.create({email: 'sara@smith.com', password: 'password', first_name: 'Sara', last_name: "Smith", about: 'Hi! I am Sara. Ive started this endeavor with my husband and we''ve been getting so many amazing feedbacks. Feel free to check our places out, and leave a review if you do stay! We look forward to hosting you!' , location: 'Miami, FL'})
    


listing_one = Listing.create({title: 'Beautiful resort home', about: 'This beautiful townhouse is located right acrros the street from the beach', host_id: user_one.id, city: 'Kissimmee', state: "FL", zip_code: 34747, beds: 5, price: 185, lat: 28.306627 , lng:-81.650637 , country: 'US', street: '9031 Sunset Palms Ter', guests: 10, bath: 5, place: 'house', specific: 'vacation home', privacy: 'an entire place'})
listing_two = Listing.create({title: 'Orlando Resort Home', about: 'Newly built home! Fits up to 15 people. Its a 15 minute drive from all the parks. Perfect vacation home!', host_id: user_two.id, city: 'Reunion', state: "FL", zip_code: 34747, beds: 6, price: 350, street: '2400 Tangier Dr' , lat: 28.314926324668004, lng: -81.64713817988773, country: 'US', guests: 12 , bath: 6 , place: 'house', specific: 'vacation home', privacy: 'an entire place'})
listing_three = Listing.create({title: 'Home in the heart of Williamsburg', about: 'This home is right in the heart of Brooklyn! 3 floors, hot tub, large kitchen, and a phenomonal way to spend your NY vacation.', host_id: user_one.id, city: 'Brooklyn', state: "NY", zip_code: 11211, beds: 6, price: 550, street: '17 Fillmore Pl', lat:40.714067, lng:73.958572, country: 'US', guests: 12 , bath: 4 , place: 'house', specific: 'Residential home', privacy: 'an entire place'})
listing_four = Listing.create({title: '2 bedroom apartment', about: 'Two bedroom apartment overlooking Central Park. Right in the heart of NYC, minutes from Times Square', host_id: user_one.id, city: 'New York', state: "NY", zip_code: 10019, country: 'US', beds: 2, guests: 4, bath: 1, price: 250, street: '1000 10th Ave' , place: "apartment" , specific: 'Condominium(condo)' , privacy: 'an entire place' , lat:40.769180, lng: -73.984892})
listing_five = Listing.create({title: '1 bedroom apartment', about: 'One bedroom apartment on the west side river.', host_id: user_three.id, city: 'New York', state: "NY", zip_code: 10001, country: 'US', beds: 2, guests: 4, bath: 1, price: 250, street: '619 W 25th St' , place: "apartment" , specific: 'Condominium(condo)' , privacy: 'an entire place' , lat:40.750040, lng: -74.006234})
    # {title: 'Cozy home in the moutains', about: 'This cozy home in the moutains has a large backyard with a fireplace, hot tub, and an indoor game room', host_id: 1, city: 'Salt Lake City', state: "Utah", zip_code: 12345, pets_allowed: true, num_beds: 8, price: 200},
    
    # {title: 'Home on the lake', about: 'This home is right on the lake!', host_id: 1, city: 'Irvine', state: "California", zip_code: 39582, pets_allowed: false, num_beds: 8, price: 300},


# attach to user
user_one.photo.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/demo.png'), filename: "demo.png")
user_two.photo.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/john.jpg'), filename: "john.jpg")
user_three.photo.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/esther.jpg'), filename: "esther.jpg")
user_four.photo.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kevin.jpg'), filename: "kevin.jpg")
user_five.photo.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/sara.jpg'), filename: "sara.jpg")



listing_four.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/apartment_bedroom.jpg'), filename: 'aptbedroom.jpg')
listing_four.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/apartment_dining.jpg'), filename: 'aptdining.jpg')
listing_four.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/apartment_living_2.jpg'), filename: 'aptliving2.jpg')
listing_five.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/apartment_living_room.jpg'), filename: 'aptliving.jpg')
listing_four.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/apartment-kitchen.jpg'), filename: 'aptkitchen.jpg')
listing_five.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/apartment-kitchen.jpg'), filename: 'aptkitchen.jpg')
listing_one.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom1.jpg'), filename: 'bedroom.jpg')
listing_two.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom2.jpg'), filename: 'bedroom2.jpg')
listing_two.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom1.jpg'), filename: 'bedroom.jpg')
listing_five.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom2.jpg'), filename: 'bedroom2.jpg')
listing_three.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom2.jpg'), filename: 'bedroom2.jpg')
listing_three.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom3.jpg'), filename: 'bedroom3.jpg')
listing_one.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining1.jpg'), filename: 'dining1.jpg')
listing_one.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining2.jpg'), filename: 'dining2.jpg')
listing_two.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining2.jpg'), filename: 'dining2.jpg')
listing_three.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining3.jpg'), filename: 'dining3.jpg')
listing_five.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining4.jpg'), filename: 'dining4.jpg')
listing_five.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/inside_apt.jpg'), filename: 'insideapt.jpg')
listing_one.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen1.jpg'), filename: 'kitchen.jpg')
listing_two.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen1.jpg'), filename: 'kitchen.jpg')
listing_three.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen1.jpg'), filename: 'kitchen.jpg')
listing_one.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/outdoor1.jpg'), filename: 'outdoor1.jpg')
listing_two.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/outdoor1.jpg'), filename: 'outdoor1.jpg')
listing_three.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/outdoor1.jpg'), filename: 'outdoor1.jpg')
listing_four.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/outside_apt.jpg'), filename: 'outsideapt.jpg')
# listing_one.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/apartment_bedroom.jpg'), filename: 'aptbedroom.jpg')
# listing_one.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/apartment_bedroom.jpg'), filename: 'aptbedroom.jpg')
# listing_one.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/apartment_bedroom.jpg'), filename: 'aptbedroom.jpg')
# listing_one.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/apartment_bedroom.jpg'), filename: 'aptbedroom.jpg')
# listing_one.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/apartment_bedroom.jpg'), filename: 'aptbedroom.jpg')
# listing_one.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/apartment_bedroom.jpg'), filename: 'aptbedroom.jpg')
# listing_one.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/apartment_bedroom.jpg'), filename: 'aptbedroom.jpg')
# listing_one.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/apartment_bedroom.jpg'), filename: 'aptbedroom.jpg')