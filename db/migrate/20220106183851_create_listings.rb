class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.string :title, null: false 
      t.text :about, null: false
      t.integer :host_id, null: false 
      t.string :city, null: false 
      t.string :state, null: false 
      t.integer :zip_code, null: false 
      t.boolean :pets_allowed, defaults: false 
      t.timestamps
    end
    add_index :listings, :host_id
    add_index :listings, :zip_code
    add_index :listings, :city
    add_index :listings, :state
  end
end
