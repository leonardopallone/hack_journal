class CreateJournals < ActiveRecord::Migration[7.0]
  def change
    create_table :journals do |t|
      t.datetime :date_made
      t.datetime :time_made
      t.text :desc
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
