# Jose Cruz Portfolio

## Overview
I wanted to rebuild my portfolio site. and since my first attempt was a HTML template, I just didn't feel like I actually did anything. For this project since I have been learning ReactJs, Tailwind, and Express Js; I decided to just build a small full stack application that consist of node mailer with Gmail as a service. 

## Features
This project is responsive and has dark and light mode. Also, the email functionality does work in which I used Gmail's service. 

## Running the project 
In order to run this project, you would first need to git clone. Once the project has been cloned in the main directory run <npm run build> this will generate "dist" folder in the frontend. 

### Disable the content security policy (CSP)
In both the dist/index.html and frontend/index.html files, comment out the following line: 

``` bash <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> ```


 Once that is done you can now run npm run dev in the main directory and this will run the server on 5001, then on a separate terminal cd to the frontend directory and run npm run dev, this will run the front end react on port 5173. 

## Email Setup

This project uses email functionality. To enable it:

1. Get your email credentials:
   - **Gmail**: Enable 2FA and create an [App Password](https://support.google.com/accounts/answer/185833)
   - **SendGrid**: Sign up and get an API key
   - **Other**: Use your SMTP credentials

2. Add to your `.env` file:
```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_SERVICE=gmail 
```

## Dependencies 
###### Frontend 
1. TailwindCss
2. Bootstrap-Icons
3. DaisyUi
4. react 
5. react-dom
6. react-router-dom
7. theme-change 

###### Backend
1. Cors
2. Cross-env
3. express
4. nodemailer