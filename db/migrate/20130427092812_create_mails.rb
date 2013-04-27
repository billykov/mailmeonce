class CreateMails < ActiveRecord::Migration
  def change
    create_table :mails do |t|
      t.string :from
      t.string :to
      t.string :subject

      t.timestamps
    end
  end
end
