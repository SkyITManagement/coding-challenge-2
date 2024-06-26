# GBCS Django-REST Coding Challenge

## Coding Challenge

### Objective

Implement 2 views and serializers, and make successful POST and GET requests to each.

### Project Structure

This project was generated with the following commands:
   ```bash
   django-admin startproject django_rest_challenge .
   cd django_rest_challenge
   django-admin startapp challenge 
   ```

### Steps

1. **Clone the provided repository**

   ```bash
   git clone -b Django-REST-Challenge --single-branch https://github.com/SkyITManagement/coding-challenges.git
   cd coding-challenges
   ```

2. **Set up Virtual Enviorment**
   ```bash
   python -m venv venv
   ```
   On windows:
   ```
   venv\Scripts\activate
   ```
   On MacOS/Linux:
   ```
   source venv/bin/activate
   ```

3. **Install dependencies**

   ```bash
   pip install djangorestframework
   ```

4. **Implement the views and serializers for the Users and Groups models**

5. **Run the server**
   ```bash
   python manage.py runserver
   ```

### Files to Modify

- `django_rest_challenge/challenge/serializers.py`
- `django_rest_challenge/challenge/views.py`

### Additional Info

- The routing in urls.py is already set up
- The models used are the Django auth Users and Groups models
- The server can be accessed through the browser at ```bash http://127.0.0.1:8000/```. You will have options to POST and GET from each model

## Submission Details

Please follow the instructions below to submit your completed coding challenge:

### Zip the Project:

- Once you have completed the coding challenge, zip the entire project directory.

### Record a Video:

- Record a video (less than 5 minutes) explaining how your code works. Highlight key parts of your implementation and explain your thought process.

### Send Your Submission:

- Email the .zip file of your project and the video to [hr@gbcsgroup.com](mailto:hr@gbcsgroup.com) with the subject line "GBCS Django REST Coding Challenge Submission - [Your Name]".

Thank you for participating in our coding challenge. We look forward to reviewing your submission!
