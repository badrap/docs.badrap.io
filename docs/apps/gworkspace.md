# Google Workspace

This app allows you to synchronize your Google Workspace assets into Badrap and receive security notifications about them. 

Once installed, the app fetches a list of your organization's assets from your Workspace environment, and adds them as your assets in Badrap. Whenever your assets change in Workspace, they are synchronized and updated automatically in Badrap. Assets can include:

- Domain names
- Email addresses
- Groups

The app can be connected to Workspace either with an admin or non-admin account. An admin account has by default the necessary rights to fetch information about your assets. For non-admin users, you can create a custom role that allows them to fetch your asset information, see step 2 below. 

## Installing the app

1. Google considers the Badrap app is "Unverified" because it requires certain "Limited" scopes from the Google Workspace user who installs it and it hasn't been vetted by Google.

    For a Google Workspace user to install the app, the app has to be allowlisted by an admin in their Google Workspace organization. The allowlisting can be done from the [Google Admin panel](https://admin.google.com/):

- Navigate to _Security_ -> _API Controls_ -> _Manage Third-Party App Access_ -> _Configure New App_ -> _OAuth App Name Or Client ID_.
- In the search field fill in the app's client ID, and click **Search**. The page will list the matching apps by name. Highlight the app and click **Select**.
  - The Badrap app client ID is _896703348678-sg4fi97m6p6r10dj49bfu88fjhj0t0am.apps.googleusercontent.com_, and the app is named _Badrap App for Google Workspace_.
- The next page asks which client IDs you want to configure. Select all of them and click **Select**.
- The next page asks you to choose the access type. Select **Trusted** and click **Configure**.

2. After this process, any Google Workspace user of the organization can install the app. However, the users need to have a Google Workspace role that allows accessing the required APIs. Admin users have the required permissions by default. For non-admin users, a new role can be created in the [Google Admin panel](https://admin.google.com/):

- Navigate to _Admin roles_ and click **Create new role**.
- Come up with a descriptive name for the role, for example "Badrap Watcher". Click **Continue**.
- In the privilege selection list there is a separate section called _Admin API privileges_. From there enable _Users_ -> _Read_, _Groups_ -> _Read_ and _Domain Management_ privileges. Click **Continue**.
- Click **Create Role**.
- The role has now been created and can be assigned to the users that need the required permissions to install the Google Workspace Badrap app.

3. After the steps above, you can proceed to install the Workspace app. 

4. Open the [Workspace app page](https://badrap.io/apps/gworkspace). Click **Install**. 

<div style="text-align: center;">
   <img src="./gworkspace-10-install.png" style="max-width: 95%; width: 480px;" />
</div>

5. Review the permissions that the app requests. Click **Install the app**.

<div style="text-align: center;">
   <img src="./gworkspace-20-perms.png" style="max-width: 95%; width: 480px;" />
</div>

6. Click on **Add a new account**. 

<div style="text-align: center;">
   <img src="./gworkspace-30-add-account.png" style="max-width: 95%; width: 480px;" />
</div>

7. Select your Google account that you want to use to connect to your Google Workspace installation. 
8. Google will ask for your permission to share your Workspace assets with Badrap. Review the permissions and click **Allow** to provide your consent.

<div style="text-align: center;">
   <img src="./gworkspace-40-google-perms.png" style="max-width: 95%; width: 480px;" />
</div>
 
9. In a few minutes, you should see your assets under the **Google Workspace** section on your [My Assets](https://badrap.io/assets) page.

<div style="text-align: center;">
   <img src="./gworkspace-80-assets.png" style="max-width: 95%; width: 480px;" />
</div>

## Uninstalling the app

1. Open the [Workspace app page](https://badrap.io/apps/gworkspace) and click **Uninstall**.
2. All assets listed by the app will disappear from your "My assets" page. 
3. From [Google Admin panel](https://admin.google.com/), go to _Security_ -> _API Controls_ -> _Manage Third-Party App Access_, search for the app called _Badrap App for Google Workspace_, and delete it. 
4. If you created a custom role for non-admin users in your organization to install the app, go to [Google Admin panel](https://admin.google.com/) and delete the custom role from the _Admin roles_ menu. 
