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
    


    
    #new york city 
    listing_three = Listing.create({title: 'Home in the heart of Williamsburg', about: 'This home is right in the heart of Brooklyn! 3 floors, hot tub, large kitchen, and a phenomonal way to spend your NY vacation.', host_id: user_one.id, city: 'Brooklyn', state: "NY", zip_code: 11211, beds: 6, price: 550, street: '17 Fillmore Pl', lat:40.714067, lng: -73.958572, country: 'US', guests: 12 , bath: 4 , place: 'house', specific: 'Residential home', privacy: 'an entire place'})
    
    listing_four = Listing.create({title: '2 bedroom apartment', about: 'Two bedroom apartment overlooking Central Park. Right in the heart of NYC, minutes from Times Square', host_id: user_three.id, city: 'New York', state: "NY", zip_code: 10019, country: 'US', beds: 2, guests: 4, bath: 1, price: 250, street: '1000 10th Ave' , place: "apartment" , specific: 'Condominium(condo)' , privacy: 'an entire place' , lat:40.769180, lng: -73.984892})
    
    listing_five = Listing.create({title: '1 bedroom apartment', about: 'One bedroom apartment on the west side river.', host_id: user_three.id, city: 'New York', state: "NY", zip_code: 10001, country: 'US', beds: 2, guests: 4, bath: 1, price: 280, street: '619 W 25th St' , place: "apartment" , specific: 'Condominium(condo)' , privacy: 'an entire place' , lat:40.750040, lng: -74.006234})

    
    listing_nine = Listing.create({title: '3 bedroom loft near park', about: 'The bedroom loft on the beautiful Park Ave in NYC. Beautiful view of the entire city from the window. This loft is located right near Central Park, Carnegie Hall and most major tourist attraction. It''s the perfect place to enjoy your vacation luxury style.', host_id: user_one.id, city: 'New York', state: "NY", zip_code: 10128, country: 'US', beds: 4, guests: 6, bath: 2, price: 450, street: '100-136 E 90th St' , place: "apartment" , specific: 'Loft' , privacy: 'an entire place' , lat:40.750040, lng: -74.006234})
    
    listing_ten = Listing.create({title: 'Penthouse in the heart of New York City', about: 'Large penthouse with a beautiful view of New York City. A luxury way to spend your time in New York.', host_id: user_one.id, city: 'New York', state: "NY", zip_code: 10021, country: 'US', beds: 5, guests: 8, bath: 6, price: 600, street: '619 W 25th St' , place: "apartment" , specific: 'Rental unit' , privacy: 'an entire place' , lat:40.772804, lng: -73.961784})
    
    listing_eleven = Listing.create({title: '2 bedroom apartment', about: 'Two bedroom apartment in Lower Manhattan. Right near the Brooklyn Bridge and the World Trade Center.', host_id: user_one.id, city: 'New York', state: "NY", zip_code: 10007, country: 'US', beds: 2, guests: 4, bath: 1, price: 290, street: '80 Warren St' , place: "apartment" , specific: 'Condominium(condo)' , privacy: 'an entire place' , lat:40.715198, lng: -74.010009})


    #orlando 
    listing_two = Listing.create({title: 'Orlando Resort Home', about: 'Newly built home! Fits up to 15 people. Its a 15 minute drive from all the parks. Perfect vacation home!', host_id: user_two.id, city: 'Reunion', state: "FL", zip_code: 34747, beds: 6, price: 350, street: '2400 Tangier Dr' , lat: 28.314926324668004, lng: -81.64713817988773, country: 'US', guests: 12 , bath: 6 , place: 'house', specific: 'vacation home', privacy: 'an entire place'})

    listing_one = Listing.create({title: 'Beautiful resort home', about: 'This beautiful townhouse is located right acrros the street from the beach', host_id: user_two.id, city: 'Kissimmee', state: "FL", zip_code: 34747, beds: 5, price: 185, lat: 28.306627 , lng:-81.650637 , country: 'US', street: '9031 Sunset Palms Ter', guests: 10, bath: 5, place: 'house', specific: 'vacation home', privacy: 'an entire place'})

    listing_six = Listing.create({title: 'Beautiful home in Central Orlando', about: 'Beautiful six bedroom home in central orlando. Minutes from the park. Large ppol in the back. Perfect for a family vacation!', host_id: user_two.id, city: 'Orlando', state: "FL", zip_code: 32839, country: 'US', beds: 4, guests: 8, bath: 3, price: 250, street: '619 W 25th St' , place: "house" , specific: 'vacation home' , privacy: 'an entire place', lat: 28.505554, lng: -81.399706})

    listing_seven = Listing.create({title: 'Home near Lake Ellenor', about: 'Vacation home in Orlando minutes from the lake. Enjoy a breathtaking vacation, with a large pool and game room. Private driveway and self-check -in. We pride ourselves in excellent customer service', host_id: user_two.id, city: 'Orlando', state: "FL", zip_code: 32809, country: 'US', beds: 5, guests: 10, bath: 4, price: 319, street: '2929 W Oak Ridge Rd' , place: "house" , specific: 'vacation home' , privacy: 'an entire place' , lat: 28.473558, lng: -81.415106})


    listing_eight = Listing.create({title: 'Business and vacation home near the airport', about: 'Our home is a perfect place to stay for vacations and business trips. We are close to the airport and to most conference centers. We have superb wifi throughout the home and a beautiful backyard with a grill. We can accommodate so please reach out if you need anything.', host_id: user_two.id, city: 'Orlando', state: "FL", zip_code: 32809, country: 'US', beds: 2, guests: 4, bath: 1, price: 189, street: '7341 S Orange Ave' , place: "house" , specific: 'vacation home' , privacy: 'an entire place' , lat:28.459444, lng: -81.366053})



# miami 
    listing_twelve = Listing.create({title: 'Home in Miami neear Harbor', about: 'Absolutely breathtaking home in Miami, right near the harbor. Beautiful scenery, private driveway with locked gates.', host_id: user_one.id, city: 'Miami', state: "FL", zip_code: 33137, country: 'US', beds: 4, guests: 10, bath: 5, price: 185, street: '2955 NE 2nd Ct' , place: "house" , specific: 'vacation home' , privacy: 'an entire place' , lat: 25.805395, lng: -80.190263})

    listing_thirteen = Listing.create({title: 'Vacation home near the beach', about: 'This 4 bedroom vacation home is minutes from the beach. It has an outdoor pool with a hot tub, grilling area, and large garden.', host_id: user_five.id, city: 'El Portal', state: "FL", zip_code: 33138, country: 'US', beds: 4, guests: 6, bath: 5, price: 209, street: '981 NE 82nd Terrace' , place: "house" , specific: 'vacation home' , privacy: 'an entire place' , lat: 25.851055, lng: -80.176952})

    listing_fourteen = Listing.create({title: 'Home on the beach', about: 'Gorgeous home right on the beach. Spend your vacation at our home, which is located on Miami Beach.', host_id: user_five.id, city: 'Miami Beach', state: "FL", zip_code: 33140, country: 'US', beds: 5, guests: 12, bath: 4, price: 350, street: '5101-5199 N Bay Rd,' , place: "house" , specific: 'vacation home' , privacy: 'an entire place' , lat:25.828783, lng: -80.131342})

    listing_fifteen = Listing.create({title: 'Quaint and cozy home in the center of Miami', about: 'Cozy home in Miami. Right near the water, beautiful parks, and amazing restaurants. The nightlife near is definitely an experience you would love.', host_id: user_five.id, city: 'Miami', state: "FL", zip_code: 33138, country: 'US', beds: 3, guests:4, bath: 1, price: 175, street: '557 NE 70th St' , place: "house" , specific: 'vacation home' , privacy: 'an entire place' , lat:25.839687, lng: -80.185583})

    listing_sixteen = Listing.create({title: 'Gated home in Miami', about: 'Private gated home in the beautiful Miami. Lots of outdoor space, as well as a pool and hot tub.', host_id: user_one.id, city: 'Miami', state: "FL", zip_code: 33137, country: 'US', beds: 5, guests: 8, bath: 4, price: 307, street: '93 NE 59th Terrace' , place: "house" , specific: 'vacation home' , privacy: 'an entire place' , lat:25.830376, lng: -80.194665})

# los angeles 
    listing_seventeen = Listing.create({title: '2 bedroom unit right near Dodger Stadium', about: '2 bedroom unit minutes from LA Dodgers stadium. Beautiful parks nearby.', host_id: user_four.id, city: 'Los Angeles', state: "CA", zip_code: 90026, country: 'US', beds: 2, guests: 5, bath: 2, price: 118, street: '1245 Innes Ave' , place: "secondaryunit" , specific: 'vacation home' , privacy: 'an entire place' , lat: 34.071422, lng: -118.249808})
    listing_eighteen = Listing.create({title: 'Beautiful Los Angeles home', about: 'This beautiful 4000 sq ft home is located right near the Griffith Observatory and beautiful hikes. It is also right near Universal Studios. It has a pool and a very large backyard.', host_id: user_four.id, city: 'Los Angeles', state: "CA", zip_code: 90027, country: 'US', beds: 6, guests: 12, bath: 7, price: 490, street: '2021 N Western Ave' , place: "house" , specific: 'vacation home' , privacy: 'an entire place' , lat:34.107478, lng: -118.309735})
    listing_nineteen = Listing.create({title: 'Vacation home right near Santa Monica', about: 'This vacation home is located minutes from Santa Monica and a short drive to the beach.', host_id: user_four.id, city: 'Los Angeles', state: "CA", zip_code: 90025, country: 'US', beds: 3, guests: 7, bath: 3, price: 223, street: '2014 S Barrington Ave' , place: "house" , specific: 'Vacation house' , privacy: 'an entire place' , lat: 34.036719, lng: -118.449871})
    listing_twenty = Listing.create({title: 'Condo in downtown LA', about: '3 bedroom condo in the heart of downtown Los Angeles. This is a perfect place for business conferences. It allows you to beat the LA traffic.', host_id: user_one.id, city: 'Los Angeles', state: "CA", zip_code: 90010, country: 'US', beds: 3, guests:5 , bath: 2, price: 300, street: '4633-4647 Wilshire Blvd' , place: "apartment" , specific: 'Condominium(condo)' , privacy: 'an entire place' , lat:34.061961, lng: -118.330197})


# attach to user
user_one.photo.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/demo.jpg'), filename: "demo.png")
user_two.photo.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/john.jpg'), filename: "john.jpg")
user_three.photo.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/esther.jpg'), filename: "esther.jpg")
user_four.photo.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kevin.jpg'), filename: "kevin.jpg")
user_five.photo.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/sara.jpg'), filename: "sara.jpg")



listing_one.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom1.jpg'), filename: 'bedroom1.jpg')
listing_one.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bathroom1.jpg'), filename: 'bathroom.jpg')
listing_one.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen1.jpg'), filename: 'kitchen1.jpg')
listing_one.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/living1.jpg'), filename: 'living1.jpg')
listing_one.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining1.jpg'), filename: 'dining1.jpg')


listing_two.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen2.jpg'), filename: 'kitchen2.jpg')
listing_two.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom2.jpg'), filename: 'bedroom2.jpg')
listing_two.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bathroom2.jpg'), filename: 'bathroom2.jpg')
listing_two.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/living2.jpg'), filename: 'living2.jpg')
listing_two.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining2.jpg'), filename: 'dining2.jpg')

listing_three.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining3.jpg'), filename: 'dining3.jpg')
listing_three.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/living3.jpg'), filename: 'living3.jpg')
listing_three.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom3.jpg'), filename: 'bedroom3.jpg')
listing_three.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen3.jpg'), filename: 'kitchen3.jpg')
listing_three.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bathroom3.jpg'), filename: 'bathroom3.jpg')


listing_four.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/living4.jpg'), filename: 'living4.jpg')
listing_four.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining4.jpg'), filename: 'dining4.jpg')
listing_four.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom4.jpg'), filename: 'bedroom4.jpg')
listing_four.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen4.jpg'), filename: 'kitchen4.jpg')
listing_four.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bathroom4.jpg'), filename: 'bathroom4.jpg')

listing_five.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom5.jpg'), filename: 'bedroom5.jpg')
listing_five.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/living5.jpg'), filename: 'living5.jpg')
listing_five.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining5.jpg'), filename: 'dining5.jpg')
listing_five.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen5.jpg'), filename: 'kitchen5.jpg')
listing_five.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bathroom5.jpg'), filename: 'bathroom5.jpg')

listing_six.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/living6.jpg'), filename: 'living6.jpg')
listing_six.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom6.jpg'), filename: 'bedroom6.jpg')
listing_six.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining6.jpg'), filename: 'dining6.jpg')
listing_six.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bathroom6.jpg'), filename: 'bathroom6.jpg')
listing_six.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen6.jpg'), filename: 'kitchen6.jpg')

listing_seven.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining7.jpg'), filename: 'dining7.jpg')
listing_seven.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/living7.jpg'), filename: 'living7.jpg')
listing_seven.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom7.jpg'), filename: 'bedroom7.jpg')
listing_seven.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen7.jpg'), filename: 'kitchen7.jpg')
listing_seven.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bathroom7.jpg'), filename: 'bathroom7.jpg')

listing_eight.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen8.jpg'), filename: 'kitchen8.jpg')
listing_eight.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/living8.jpg'), filename: 'living8.jpg')
listing_eight.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining8.jpg'), filename: 'dining8.jpg')
listing_eight.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom8.jpg'), filename: 'bedroom8.jpg')
listing_eight.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bathroom8.jpg'), filename: 'bathroom8.jpg')

listing_nine.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/living9.jpg'), filename: 'living9.jpg')
listing_nine.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom9.jpg'), filename: 'bedroom9.jpg')
listing_nine.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining9.jpg'), filename: 'dining9.jpg')
listing_nine.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bathroom9.jpg'), filename: 'bathroom9.jpg')
listing_nine.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen9.jpg'), filename: 'kitchen9.jpg')


listing_ten.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining10.jpg'), filename: 'dining10.jpg')
listing_ten.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/living10.jpg'), filename: 'living10.jpg')
listing_ten.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom10.jpg'), filename: 'bedroom10.jpg')
listing_ten.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen10.jpg'), filename: 'kitchen10.jpg')
listing_ten.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bathroom10.jpg'), filename: 'bathroom10.jpg')


listing_eleven.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/living1.jpg'), filename: 'living1.jpg')
listing_eleven.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining1.jpg'), filename: 'dining1.jpg')
listing_eleven.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom1.jpg'), filename: 'bedroom1.jpg')
listing_eleven.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen1.jpg'), filename: 'kitchen1.jpg')
listing_eleven.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bathroom1.jpg'), filename: 'bathroom1.jpg')

listing_twelve.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom2.jpg'), filename: 'bedroom2.jpg')
listing_twelve.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/living2.jpg'), filename: 'living2.jpg')
listing_twelve.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining2.jpg'), filename: 'dining2.jpg')
listing_twelve.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen2.jpg'), filename: 'kitchen2.jpg')
listing_twelve.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bathroom2.jpg'), filename: 'bathroom2.jpg')

listing_thirteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/living3.jpg'), filename: 'living3.jpg')
listing_thirteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining3.jpg'), filename: 'dining3.jpg')
listing_thirteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom3.jpg'), filename: 'bedroom3.jpg')
listing_thirteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen3.jpg'), filename: 'kitchen3.jpg')
listing_thirteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bathroom3.jpg'), filename: 'bathroom3.jpg')

listing_fourteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen4.jpg'), filename: 'kitchen4.jpg')
listing_fourteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/living4.jpg'), filename: 'living4.jpg')
listing_fourteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining4.jpg'), filename: 'dining4.jpg')
listing_fourteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom4.jpg'), filename: 'bedroom4.jpg')
listing_fourteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bathroom4.jpg'), filename: 'bathroom4.jpg')


listing_fifteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom5.jpg'), filename: 'bedroom5.jpg')
listing_fifteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/living5.jpg'), filename: 'living5.jpg')
listing_fifteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bathroom5.jpg'), filename: 'bathroom5.jpg')
listing_fifteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining5.jpg'), filename: 'dining5.jpg')
listing_fifteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen5.jpg'), filename: 'kitchen5.jpg')

listing_sixteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/living6.jpg'), filename: 'living6.jpg')
listing_sixteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining6.jpg'), filename: 'dining6.jpg')
listing_sixteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom6.jpg'), filename: 'bedroom6.jpg')
listing_sixteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen6.jpg'), filename: 'kitchen6.jpg')
listing_sixteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bathroom6.jpg'), filename: 'bathroom6.jpg')

listing_seventeen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen7.jpg'), filename: 'kitchen7.jpg')
listing_seventeen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/living7.jpg'), filename: 'living7.jpg')
listing_seventeen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining7.jpg'), filename: 'dining7.jpg')
listing_seventeen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom7.jpg'), filename: 'bedroom7.jpg')
listing_seventeen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bathroom7.jpg'), filename: 'bathroom7.jpg')


listing_eighteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom8.jpg'), filename: 'bedroom8.jpg')
listing_eighteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/living8.jpg'), filename: 'living8.jpg')
listing_eighteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining8.jpg'), filename: 'dining8.jpg')
listing_eighteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen8.jpg'), filename: 'kitchen8.jpg')
listing_eighteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bathroom8.jpg'), filename: 'bathroom8.jpg')


listing_nineteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/living9.jpg'), filename: 'living9.jpg')
listing_nineteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining9.jpg'), filename: 'dining9.jpg')
listing_nineteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom9.jpg'), filename: 'bedroom9.jpg')
listing_nineteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen9.jpg'), filename: 'kitchen9.jpg')
listing_nineteen.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bathroom9.jpg'), filename: 'bathroom9.jpg')

listing_twenty.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/dining10.jpg'), filename: 'dining10.jpg')
listing_twenty.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/living10.jpg'), filename: 'living10.jpg')
listing_twenty.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bedroom10.jpg'), filename: 'bedroom10.jpg')
listing_twenty.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/kitchen10.jpg'), filename: 'kitchen10.jpg')
listing_twenty.photos.attach(io: URI.open('https://herebnb-seeds.s3.amazonaws.com/bathroom10.jpg'), filename: 'bathroom10.jpg')