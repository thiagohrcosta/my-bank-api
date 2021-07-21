json.array! @accounts do |account|
  json.extract! account, :id, :user_id, :number, :full_name, :balance
end
