class CreateListingChange < ActiveRecord::Migration[6.1]
  def change
    drop_table :listings
  end
end
