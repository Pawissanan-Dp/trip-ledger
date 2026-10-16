# Trip Ledger

A shared ledger for group trips: collect money before you go, record expenses, record payments and see who owes whom. Static page, so it runs on GitHub Pages. Data is stored in Firebase (free plan), so everyone sees the same live ledger.

## Set up (about 15 minutes, once)

### 1. Create a Firebase project
1. Go to https://console.firebase.google.com and sign in with a Google account.
2. **Add project**, give it a name, and skip Google Analytics.

### 2. Connect the page to it
1. In the project, click the web icon (`</>`) to **add a web app**. Skip Firebase Hosting.
2. Copy the `firebaseConfig` values it shows (`apiKey`, `authDomain`, `projectId`, `appId`).
3. Paste them into `firebase-config.js` in this folder.

### 3. Create the database
1. In the left menu choose **Build > Firestore Database > Create database**.
2. Pick a location near you and start in **production mode**.
3. Open the **Rules** tab, replace everything with the rules below, and **Publish**.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /g/{group}/{document=**} {
      allow read, write: if true;
    }
  }
}
```

### 4. Put it on GitHub Pages
1. On GitHub create a new repository (public is simplest for Pages on a free account).
2. **Add file > Upload files** and upload `index.html`, `firebase-config.js` and `README.md`.
3. In **Settings > Pages**, set the source to **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute the site is live at `https://YOUR-NAME.github.io/REPO-NAME/`.

### 5. Start your group
1. Open the site and choose **Start a new group**. You get a private link ending in `?g=...`.
2. Use **Copy invite link** and send it to your friends. Anyone opening it joins the same ledger.
3. To bring over the Chiang Mai trip: **New trip**, then choose `cnx-backup.json` under "restore a trip from a backup file".

## How access works
Each group's data lives under its secret group code. People who do not know the code cannot list or find it, but **anyone who has the invite link can read and edit the ledger**, and there are no passwords. Share the link only with your group. Treat it like a private chat link.

## Receipt photos
On the Expenses tab each expense has **Add photo**. Pick a photo or take one with the phone camera. The page shrinks it in the browser (longest side 1200 px, JPEG, about 30 to 150 KB) before saving, so a 10 MB phone photo costs very little. Each photo is stored in its own record and only loaded when you tap **View photo**, so the expense list stays fast.

Firebase's free plan includes 1 GiB of database storage, which is room for several thousand receipts at this size. Deleting an expense or a trip also deletes its photos. Photos are not included in **Download backup**.

## Backups
Open a trip, choose **Edit trip > Download backup** to save a JSON file of its people, bookings, expenses and payments (not photos). Restore it any time from **New trip**.

## Demo mode
If `firebase-config.js` still says `PASTE_API_KEY`, the page works but keeps data only in that browser tab. This is only for trying it out.
