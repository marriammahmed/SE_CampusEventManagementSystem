from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS



app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), nullable=False)
    participants = db.Column(db.Integer, nullable=False)

@app.route('/')
def home():
    return 'Campus Event User Service Running!'

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    user = User(email=data['email'], participants=data['participants'])
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User registered!', 'user': {'email': user.email, 'participants': user.participants}}), 201

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([{'email': u.email, 'participants': u.participants} for u in users])

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(port=5001)
