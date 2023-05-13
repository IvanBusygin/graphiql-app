## Using Google Firebase

This project uses Google Firebase with email option for authentication. To start working with Firebase, you need to register on the [Firebase Console](https://console.firebase.google.com/). Then you need to create a project and get the project key, which will be used in your application. You can find more details in [this article](https://blog.logrocket.com/user-authentication-firebase-react-apps/).

## Firebase Configuration

To use Firebase in your application, you need to configure the configuration file. You can find an example file `.env.example` in this repository. Copy it to your project and rename it to `.env`.

In the `.env` file, you should specify all the necessary environment variables, such as Firebase project key and other settings. This file should be added to `.gitignore` to prevent it from being publicly available.

Example `.env` file:

```
VITE_FIREBASE_APIKEY=your_api_key
VITE_FIREBASE_AUTHDOMAIN=your_auth_domain
VITE_FIREBASE_PROJECTID=your_project_id
VITE_FIREBASE_STORAGEBUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGINGSENDID=your_messaging_sender_id
VITE_FIREBASE_APPID=your_app_id
```

## More information

Additional information about Firebase can be found in the [Firebase documentation](https://firebase.google.com/docs).
