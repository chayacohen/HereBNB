json.extract! user, :id, :email, :first_name, :last_name, :about, :location, :work

 if user.photo.attached?
    json.photoUrl url_for(user.photo) 
else 
    json.photoUrl "https://a0.muscache.com/defaults/user_pic-50x50.png?v=3" 
end 

