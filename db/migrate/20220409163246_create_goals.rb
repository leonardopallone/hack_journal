class CreateGoals < ActiveRecord::Migration[7.0]
  def change
    create_table :goals do |t|
      t.string :new_goal
      t.string :diff
      t.boolean :accomp
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
