class UpdateColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :listings, :pets_allowed
    add_column :listings, :pets_allowed, :boolean, null: false, default: false 
  end
end
