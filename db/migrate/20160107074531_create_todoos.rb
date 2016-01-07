class CreateTodoos < ActiveRecord::Migration
  def change
    create_table :todoos do |t|
      t.string :item
      t.boolean :done

      t.timestamps null: false
    end
  end
end
