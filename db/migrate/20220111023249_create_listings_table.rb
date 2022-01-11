class CreateListingsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.string :about, null: false
      t.integer :price, null: false
      t.string :street, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :country, null: false
      t.integer :zip_code, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :guests, null: false
      t.integer :beds, null: false
      t.integer :bath, null: false
      t.string :place, null: false
      t.string :specific, null: false
      t.string :privacy, null: false
      t.integer :host_id, null: false
      t.timestamps
    end
    add_index :listings, :host_id
    add_index :listings, :zip_code
    add_index :listings, :city
    add_index :listings, :state
  end
end
