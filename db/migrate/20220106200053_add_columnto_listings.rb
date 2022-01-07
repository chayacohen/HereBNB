class AddColumntoListings < ActiveRecord::Migration[6.1]
  def change
    add_column :listings, :num_beds, :integer, null: false 
  end
end
