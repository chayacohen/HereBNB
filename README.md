
# Herebnb 

Herebnb is a clone of the popular Airbnb.

[Click here for the live site](https://herebnb.herokuapp.com/#/) 
  

<img src="https://user-images.githubusercontent.com/90418154/149542990-235362cd-387e-4bdf-8208-ded4db782b82.gif" height=400px width="auto"/>
<!-- ![splash page ](https://user-images.githubusercontent.com/90418154/149538716-acb34ad9-8579-4555-88dc-0e84c8504efd.gif) -->



## Technologies

Herebnb is build with the following technologies: 

  - AWS
  - CSS
  - Google Maps API
  - HTML
  - Javascript
  - React 
  - Redux
  - Ruby 
  - Ruby on Rails 
  - Webpack

## Features 

### User Authentication
 Users are able to login or signup via a modal on the right nav bar. The login and signup button takes you to the same modal where the backend verfiies whether the email is associated with a user or not. Depending, the login or signup modals are then displayed. This process renders errors when appropriate and successfully logs in or signs up a user.
 
 <img src="https://user-images.githubusercontent.com/90418154/149543760-73dcb6b3-818a-4417-9087-13db12c49a80.gif" height=400px width="auto"/>
 
 ### Account Profile Page
 
  Users are able to visit their account page. They can update their profile, update their profile photo and view all of their listings. Users can only update their own profiles and listings, all other users are restricted from accessing that page. Users can view other users' profile pages, however no buttons to update profile is rendered. 
  
  ### Listings
  
  Users can create, update, and destroy their own listings. They can view all listings (whether or not they are logged in). They can also view listings filtered by location. A map is rendered with markers corresponding to the appropriate listings. 
  
  ### Search 
  
 Users can search listings to filter by city and number of guests. They can view all listings if they are feeling flexible. 
 
### Map 

Search results render with a map if a location is provided. Users can dynamically move the map to view listings that are within the map bounds. 

 ### Bookings 
 
  Users can book dates for listings. They can view all their listings by clicking the trips button from the profile menu. Users can change their reservations as well and cancel reservations. 
  
 ### To be continued 
 - Users will be able to like a listing and it will be added to their wishlist. 
 - Users will be able to leave reviews on locations 


## Code Snippet 

``` Javascript

     handleDateChange(field) {
        return (e) => {
            const today = new Date();
            const todayDate = today.toISOString().split('T')[0];
            this.state[field] = e.target.value;  
            if (e.target.value < todayDate) {  
                this.setState({[field]: ''})
                e.target.value = ''; 
            }
            else if ((this.state.start_date && this.state.start_date) && (new Date(this.state.start_date) >= new Date(this.state.end_date))) {
                this.setState({[field]: ''});
                e.target.value = ''; 
            }
            else {
                this.setState({[field]: e.target.value})
                this.state[field] = e.target.value; 
                if (this.state.start_date && this.state.end_date) {
                    this.setState({ buttonText: "Reserve"} )
                 } 
            }
        }
     } 
```

- The above code ensures that you cannot book a date that's is prior to the current date
- It also ensures that the end date must be one day past the start date 

``` Javascript 
   handlePlusClick(field) {
        return () => {
            if (field === "adult") {
                if (this.state.adult + this.state.child < this.props.listing.guests)
                this.setState({ adult: this.state.adult += 1 })
                this.tabReturn()
            }
            else if (field === "child") {
                if (this.state.adult + this.state.child < this.props.listing.guests)
                    this.setState({ child: this.state.child += 1 })
                    this.tabReturn()
            }
            else if (field === "infant") {
                if (this.state.infant < 5) {
                    this.setState({ infant: this.state.infant += 1 })
                    this.tabReturn()
                }
            }
        }
       }
```

- The above allows for the plus button to add guests as long as the total guests are less than the amount allowed by the listing 
- The tabReturn function dynamically changes the line displayed about the amount of guests currently selected (e.g 1 guest, 1 infant)
- There is a corresponding function that handles the minus click, ensuring you can't go down passed 0
  

