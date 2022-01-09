class AddNull < ActiveRecord::Migration[6.1]
  def change
    change_column_null :listings, :price, false
  end
end
