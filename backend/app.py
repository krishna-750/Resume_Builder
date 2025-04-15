from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from pymongo import MongoClient
from datetime import timedelta

app = Flask(__name__)
CORS(app)

# Configure MongoDB
MONGO_URI = "mongodb://localhost:27017/resumabuilder"
client = MongoClient(MONGO_URI)
db = client["resumabuilder"]
users_collection = db["users"]

# Configure JWT
app.config["JWT_SECRET_KEY"] = "your_secret_key"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(days=7)
jwt = JWTManager(app)

bcrypt = Bcrypt(app)

@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if not name or not email or not password:
        return jsonify({"error": "All fields are required"}), 400

    if users_collection.find_one({"email": email}):
        return jsonify({"error": "User already exists"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")

    user_data = {
        "name": name,
        "email": email,
        "password": hashed_password
    }

    users_collection.insert_one(user_data)
    return jsonify({"message": "User registered successfully"}), 201

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Both email and password are required"}), 400

    user = users_collection.find_one({"email": email})

    if not user or not bcrypt.check_password_hash(user["password"], password):
        return jsonify({"error": "Invalid email or password"}), 401

    access_token = create_access_token(identity={"email": email, "name": user["name"]})

    return jsonify({
        "message": "Login successful",
        "access_token": access_token,
        "name": user["name"],
        "email": user["email"]
    }), 200

@app.route('/user-count', methods=['GET'])
def user_count():
    try:
        count = users_collection.count_documents({})
        print(f"User count: {count}")  # Moved print before return for debugging
        return jsonify({"user_count": count}), 200
    except Exception as e:
        print(f"Error retrieving user count: {e}")  # Log error for debugging
        return jsonify({"error": "Failed to retrieve user count", "details": str(e)}), 500

@app.route('/test', methods=['GET'])
def test():
    return jsonify(message="Test endpoint working"), 200

if __name__ == '__main__':
    app.run(debug=True)