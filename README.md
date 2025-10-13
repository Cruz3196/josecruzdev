# Jose Cruz's Portfolio

## Overview
I wanted to rebuild my portfolio site and since my first attempt was a HTML template, I just didn't feel like I actually did anything. For this project since I have been learning: **ReactJS**, **TailwindCSS**, and **ExpressJS**; I decided to revisit the drawing board and do a small full stack application. 

## Features
This project is responsive and has dark and light mode toggle. Also, the email functionality has been implemented in which I used Gmail as a service provider. 

## Running the project 
In order to run this project, you would first need to ```git clone```. Once the project has been cloned; navigate to the main directory and run ```npm run build``` this will generate "dist" folder in the frontend. 

### Disable the content security policy (CSP)
In both the dist/index.html and frontend/index.html files, comment out the following line: 

```
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 
```


 Once that is done, you can now run ```npm run dev``` in the main directory and this will start Express server on port 5001. On a separate terminal cd to the frontend directory and run ```npm run dev```, this will launch the React app on port 5173. 

### Before Deployment
If you plan to deploy the project, make sure to uncomment the CSP meta tag in both dist/index.html and frontend/index.html:

```
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 
```

This ensures secure HTTPS requests are enforced in production.

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