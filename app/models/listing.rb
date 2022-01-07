class Listing < ApplicationRecord 


    validates :title, :about, :host_id, :city, :state, :zip_code, presence: true
    validates_inclusion_of :pets_allowed, in: [true, false] 
    
    belongs_to :host, 
        foreign_key: :host_id, 
        class_name: :User

    has_many_attached :photos

    
end 