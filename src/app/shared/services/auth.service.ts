import { Injectable, NgZone } from '@angular/core';
import { User } from '../user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})

export class AuthService {

  // private user$$ = new BehaviorSubject<User | undefined>(undefined);
  // public user$ = this.user$$.asObservable();
  // user: User | undefined;


  userData: any; // Save logged in user data
  token: string;

  constructor(
    private afs: AngularFirestore, // Inject Firestore service
    private afAuth: AngularFireAuth, // Inject Firebase auth service
    private router: Router,
    private ngZone: NgZone, // NgZone service to remove outside scope warning
    private toastr: ToastrService,
    private http: HttpClient
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    let isLoggin: boolean = false;
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
        isLoggin = true;
        // console.log(isLoggin);

      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['home']);
            this.toastr.success('Login Success');
          }
        });
      })
      .catch((error) => {
        this.toastr.error(error.message, 'Warning');
        // window.alert(error.message);
      });
  }


  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['home']);
            this.toastr.success('Register Success');
          }
        });
      })
      .catch((error) => {
        this.toastr.error(error.message, 'Warning');
        // window.alert(error.message);
      });
  }



  // Profile data change with email/password
  // ProfileDataChange(email: string, password: string) {
  //   return this.afAuth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((result) => {
  //       /* Call the SendVerificaitonMail() function when new user sign 
  //       up and returns promise */
  //       this.SendVerificationMail();
  //       this.UpdateUserProfile(result.user);
  //       this.afAuth.authState.subscribe((user) => {
  //         if (user) {
  //           this.router.navigate(['cars']);
  //         }
  //       });
  //     })
  //     .catch((error) => {
  //       window.alert(error.message);
  //     });
  // }


  // getProfile() {
  //   return this.http
  //     .get<User>('/api/users/profile')
  //     .pipe(tap((user) => this.user$$.next(user)));
  // }

  // updateProfile( email: string ) {
  //   return this.http
  //     .put<User>('/api/users/profile', { email })
  //     .pipe(tap((user) => this.user$$.next(user)));
  // }

  // updateUserData({ uid, email, displayName }: User) {
  //   const userRef: AngularFirestoreDocument<User> = this.afs.doc(
  //     `users/${uid}`
  //   );
  //   return userRef.set({ uid, email, displayName }, { merge: true });
  // }



  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Returns true when user is logged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Get User Email
  get user(): string {
    const userEmail = JSON.parse(localStorage.getItem('user')!).email;
    return userEmail;
  }

  // Get Username
  get username(): string {
    const username = JSON.parse(localStorage.getItem('user')!).email;
    let emailName = username.split('@');
    let user = emailName[0];

    return user;
  }

  // Get UID
  get uid(): string {
    const uid = JSON.parse(localStorage.getItem('user')!).uid;
    return uid;
  }

  //-------------------------
  // Get Token -- // not used
  async getToken() {
    (await this.afAuth.currentUser)
      .getIdToken()
      .then((token: string) => {
        this.token = token;
      })

    return this.token;
  }


  isAuthenticated(): boolean {
    return this.token != null;
  }
  //--------------------------


  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['cars']);
    });
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['home']);
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: User) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  // UpdateUserProfile(user: User) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(
  //     `users/${user.uid}`
  //   );
  //   const userData: User = {
  //     uid: user.uid,
  //     email: user.email,
  //     displayName: user.displayName,
  //   };
  //   return userRef.update({ ...userData });
  // }


  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['home']);
    });
  }

}