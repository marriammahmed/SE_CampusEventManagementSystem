import requests

# User Registration
print("== Register User ==")
user_data = {'email': 'test@example.com', 'participants': 3}
res = requests.post('http://localhost:5001/register', json=user_data)
print(res.json())

# Registration Service
print("== Register in Registration Service ==")
res = requests.post('http://localhost:5002/register', json=user_data)
print(res.json())

# Event Creation
print("== Create Event ==")
event_data = {'name': 'AI Workshop', 'date': '2025-06-10', 'location': 'Main Hall'}
res = requests.post('http://localhost:5004/event', json=event_data)
print(res.json())

# Approval Service
print("== Approve Event ==")
approval_data = {'event_id': 1, 'approved': True}
res = requests.post('http://localhost:5005/approve', json=approval_data)
print(res.json())

# Notification
print("== Send Notification ==")
notify_data = {'email': 'test@example.com', 'status': 'Approved'}
res = requests.post('http://localhost:5003/notify', json=notify_data)
print(res.json())
