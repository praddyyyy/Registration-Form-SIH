from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, TextAreaField, IntegerField, BooleanField, RadioField, SubmitField, DateField
from wtforms.validators import InputRequired, Length, DataRequired, Optional

class RegisterForm(FlaskForm):
    name = StringField("Student Name", [DataRequired("Message 1"), Length(min=5, max=20)])
    email = TextAreaField("Email", [DataRequired("Message 2"), Length(min=6,max=30)])
    phone = StringField("Phone", [Optional(strip_whitespace=True)])
    aadhar_no = StringField("Aadhar Number")
    gender = RadioField('Gender', choices=['Male', 'Female'], validators=[InputRequired()])
    birth_date = DateField('Date of Birth', format='%d/%m/%y')
    clg_name = TextAreaField("Collge Name", [DataRequired("Message 3")])
    uni_name = TextAreaField("University Name", [DataRequired("Message 4")])
    admisson = IntegerField("Admission")
    course = SelectField('Course', choices=[('cpp', 'C++'), ('py', 'Python'), ('text', 'Plain Text')])
    submit = SubmitField("Send")