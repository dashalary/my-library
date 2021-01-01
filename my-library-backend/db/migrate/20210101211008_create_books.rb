class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.boolean :read
      t.integer :library_id

      t.timestamps
    end
  end
end
