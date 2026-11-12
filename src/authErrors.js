const MESSAGES = {
  "auth/invalid-credential": "Wrong email or password.",
  "auth/invalid-email": "That email address is not valid.",
  "auth/email-already-in-use":
    "An account with this email already exists. Log in instead.",
  "auth/weak-password": "Password must be at least 6 characters.",
  "auth/too-many-requests": "Too many attempts. Wait a minute and try again.",
  "auth/popup-closed-by-user": "Google sign-in was cancelled.",
  "auth/popup-blocked":
    "Your browser blocked the Google pop-up. Allow pop-ups for localhost.",
  "auth/network-request-failed":
    "No connection. Check your internet and try again.",

  // Added
  "auth/user-not-found": "No account found with that email.",
  "auth/wrong-password": "Wrong email or password.",
  "auth/user-disabled": "This account has been disabled.",
  "auth/missing-password": "Please enter your password.",
  "auth/cancelled-popup-request": "Google sign-in was cancelled.",
  "auth/operation-not-allowed":
    "This sign-in method is not turned on. Enable it in the Firebase console.",
  "auth/unauthorized-domain":
    "This domain is not authorized in Firebase. Add it under Authentication, Settings.",
  "auth/account-exists-with-different-credential":
    "An account with this email already exists using a different sign-in method.",
  "auth/requires-recent-login": "Please log in again to do this.",
};

export function authErrorMessage(error) {
  return MESSAGES[error?.code] ?? "Something went wrong. Please try again.";
}
