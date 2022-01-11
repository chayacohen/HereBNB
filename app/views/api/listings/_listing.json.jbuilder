json.extract! listing, :id, :title, :about, :host_id, :city, :state, :zip_code, :price, :street, :country, :lat, :lng, :guests, :beds, :bath, :place, :specific, :privacy

if listing.photos.length != 0  
    json.photoUrls listing.photos.map{|file| url_for(file)}
end 