class CreateGamers < ActiveRecord::Migration[5.2]
  def change
    create_table :gamers do |t|
      t.string :name
      t.string :game

      t.timestamps
    end
  end
end
