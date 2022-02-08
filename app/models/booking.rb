class Booking < ApplicationRecord 

    validates :listing_id, :user_id, :start_date, :end_date, :price, :adults, :children, :infants, presence: true 

    belongs_to :listing, 
    foreign_key: :listing_id,
    class_name: :Listing

    belongs_to :guest, 
    foreign_key: :user_id, 
    class_name: :User

end 