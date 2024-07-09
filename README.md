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
   git clone https://github.com/SkyITManagement/coding-challenge-2.git
   cd coding-challenge-2
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

4. **Sync the Database**
   ```bash
   python manage.py migrate
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
- The server can be accessed through the browser at ```http://127.0.0.1:8000/```. You will have options to POST and GET from each model
- Be sure to create an admin account with ```python manage.py createsuperuser```

## Submission Details

Please follow the instructions below to submit your completed coding challenge:


### Record a Video:

- Record a video (less than 5 minutes) explaining how your code works. Highlight key parts of your implementation and explain your thought process.

### Send Your Submission:

- Please use this google forms link to submit your video: https://forms.gle/vUxEJ3vzAsH3qTaUA

Thank you for participating in our coding challenge. We look forward to reviewing your submission!
