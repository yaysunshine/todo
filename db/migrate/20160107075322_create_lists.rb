class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :item
      t.boolean :done

      t.timestamps null: false
    end
  end
end
