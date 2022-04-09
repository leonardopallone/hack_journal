class CreateVisionBoards < ActiveRecord::Migration[7.0]
  def change
    create_table :vision_boards do |t|
      t.string :title
      t.boolean :favorite
      t.boolean :current
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
