class UpdateListings < ActiveRecord::Migration[6.1]
  def change
    add_column :listings, :price, :integer
  end
end
