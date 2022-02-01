class RemoveNull < ActiveRecord::Migration[6.1]
  def change
    change_column_null :listings, :title, :true 
    change_column_null :listings, :about, :true 
    change_column_null :listings, :price, :true 
    change_column_null :listings, :street, :true 
    change_column_null :listings, :city, :true 
    change_column_null :listings, :state, :true 
    change_column_null :listings, :country, :true 
    change_column_null :listings, :zip_code, :true 
    change_column_null :listings, :lat, :true 
    change_column_null :listings, :lng, :true 
    change_column_null :listings, :guests, :true 
    change_column_null :listings, :beds, :true 
    change_column_null :listings, :bath, :true 
    change_column_null :listings, :specific, :true 
    change_column_null :listings, :privacy, :true 
    add_column :listings, :complete, :boolean, :default => false 
  end
end
