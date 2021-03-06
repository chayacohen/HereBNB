class User < ApplicationRecord 
    
    attr_reader :password 

    has_one_attached :photo
    
    has_many :listings, 
    foreign_key: :host_id, 
    primary_key: :id, 
    class_name: :User 
    # dependent: :destroy

    has_many :bookings, 
    foreign_key: :user_id, 
    class_name: :Booking

    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true 

    validates :password, length: {minimum: 6}, allow_nil: true 

    after_initialize :ensure_session_token 
    # after_initialize :ensure_profile_photo

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email) 
        return nil if user.nil? 
        user.is_password?(password) ? user : nil
    end
    
    def self.find_by_email(email)
        user = User.find_by(email: email) 
        if user.nil? 
            return {email: email, user: false}
        else 
            return {email: email, user: true} 
        end   
    end 

    # def ensure_profile_photo
    #     unless self.photo.attached? 
    #         self.photo = "https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"
    #     end 
    # end 

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end 

    def generate_session_token 
        SecureRandom.urlsafe_base64
    end 

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end 

    def ensure_session_token
        self.session_token ||= self.generate_session_token
    end 

    def reset_session_token! 
        self.session_token = self.generate_session_token
        self.save!
        self.session_token
    end 

end 