# Messaging App with Django REST Framework

![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![DRF](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

A secure messaging application built with Django REST Framework featuring JWT authentication, real-time messaging, and conversation management.

## Features

- **User Authentication**
  - JWT token-based authentication
  - User registration and login
  - Secure password management

- **Conversation Management**
  - Create and manage conversations
  - Add/remove participants
  - View conversation history

- **Messaging**
  - Send and receive messages in real-time
  - Message read receipts
  - Message history pagination

- **Security**
  - Custom permission classes
  - End-to-end encryption (future implementation)
  - Rate limiting

## Technology Stack

| Component          | Technology |
|--------------------|------------|
| Backend Framework  | Django 5.2 |
| REST API           | Django REST Framework |
| Authentication     | JWT (SimpleJWT) |
| Database           | SQLite (Development) / PostgreSQL (Production) |
| Pagination         | DRF Pagination |
| Filtering          | Django Filter |
| Documentation      | Swagger/OpenAPI |



## Installation

### Prerequisites

- Python 3.9+
- pip
- Virtualenv (recommended)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/messaging_app.git
   cd messaging_app
Create and activate virtual environment:

bash
python -m venv venv
source venv/bin/activate  # Linux/MacOS
venv\Scripts\activate     # Windows
Install dependencies:

bash
pip install -r requirements.txt
Run migrations:

bash
python manage.py migrate
Create superuser:

bash
python manage.py createsuperuser
Run development server:

bash
python manage.py runserver
