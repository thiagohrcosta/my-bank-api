User.destroy_all
Account.destroy_all


puts "Criando usuários"
150.times do
  user = User.new(
    email: Faker::Internet.email,
    password: "123456",
    admin: false,
    authentication_token: nil
)
  user.save!
  user_token =+1
  puts "#{user.id} - Usuário criado - Email #{user.email}"
end

User.create!(
  email: "thiago@costa.com",
  password: "123456",
  admin: true,
  authentication_token: nil
)

puts "Usuários criados"
puts " ================ "

puts "Criando contas"


user_id_count = 1
150.times do
  account = Account.new(
    user_id: user_id_count,
    full_name: Faker::Name.name,
    number: rand(350000..999999),
    balance: rand(1000...10000)
)
  account.save!
  user_id_count +=1
  puts "Conta do usuário #{account.user.email} | Nº #{account.number} | Saldo inicial : R$ #{account.balance}- Conta criada"
end

