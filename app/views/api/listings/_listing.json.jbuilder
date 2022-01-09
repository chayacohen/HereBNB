json.extract! listing, :id, :title, :about, :host_id, :city, :state, :zip_code, :pets_allowed, :num_beds, :host, :price 

if listing.photos.length != 0  
    json.photoUrls listing.photos.map{|file| url_for(file)}
end 