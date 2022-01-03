# json.array! @users do |user|
#     json.partial! '/api/users/user', user: user
# end 

# json.partial 'api/users/user', user: @user
json.extract! @user, :email, :user