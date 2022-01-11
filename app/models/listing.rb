class Listing < ApplicationRecord 


    validates :title, :about, :host_id, :city, :state, :zip_code, :price, :street, :country, :lat, :lng, :guests, :beds, :bath, :place, :specific, :privacy, presence: true
    
    belongs_to :host, 
        foreign_key: :host_id, 
        class_name: :User
    
    has_one :host_photo, 
    through: :host, 
    source: :photo_attachment



    has_many_attached :photos


    def self.find_by_user(userId) 
        Listing.where(host_id: userId)
    end 
    
end 