class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.integer :listing_id, null: false 
      t.integer :user_id, null: false 
      t.date :start_date, null: false 
      t.date :end_date, null: false 
      t.integer :price, null: false 
      t.integer :adults, null: false 
      t.integer :children, null: false 
      t.integer :infants, null: false 
      t.timestamps
    end
    add_index :bookings, :listing_id
    add_index :bookings, :user_id
  end
end
