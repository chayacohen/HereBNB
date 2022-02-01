class Listing < ApplicationRecord 


    validates :host_id, :place,  presence: true
    
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

    def self.inBounds(bounds) 
        self.where("lat < ?", bounds[:north])
            .where("lat > ?", bounds[:south])
            .where("lng > ?", bounds[:west])
            .where("lng < ?", bounds[:east])
    end 
    
end 