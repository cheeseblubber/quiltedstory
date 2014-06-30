class CreateChunks < ActiveRecord::Migration
  def change
    create_table :chunks do |t|
      t.text :text

      t.timestamps
    end
  end
end
