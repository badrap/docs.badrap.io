# Microsoft Azure

This app allows you to synchronize your Microsoft Azure assets into Badrap and receive security notifications about them. The app fetches a list of your organization's public IP addresses from your Azure installation with your consent, and adds those assets under your Badrap user account. 

## Install the Azure app in Badrap

Anyone can install the Azure app in Badrap, but you will need Global Administrator, Application Administrator or Cloud Application Administrator level privileges to enable the app to access your Azure installation and to list your assets from there. If you do not have administrator role privileges, refer your administrator to these instructions and ask them to help you with the app configuration. 

1. Open the [Azure app page](https://badrap.io/apps/azure). 

<div style="text-align: center;">
   <img src="./azure-10-install.png" style="max-width: 95%; width: 480px;" />
</div>

2. The app asks for your consent to create & manage new assets. Click **Install the app**. 

<div style="text-align: center;">
   <img src="./azure-20-consent.png" style="max-width: 95%; width: 480px;" />
</div>

The Azure app is now installed. Next, you have to create a service principal for the app in your Azure installation, and to provide its configuration details to the app settings. You can do this either by using the Azure CLI (incredibly easy) or your Azure Portal (still easy). 

## Using the Azure CLI

Note that installing Azure CLI to your computer is outside of the scope of this guide. You can use [Microsoft's Azure CLI installation instructions](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) to get started if you haven't installed it previously.

1. Log into Azure using your Azure CLI utility. 
```
az login
```

2. List your subscription details:
```
az account show
```
The listing will look like this:
```
{
  "environmentName": "AzureCloud",
  "homeTenantId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
  "id": "11111111-2222-3333-4444-555555666666",
  "isDefault": true,
  "managedByTenants": [],
  "name": "Pay-As-You-Go",
  "state": "Enabled",
  "tenantId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
  "user": {
    "name": "adminroleuser@example.com",
    "type": "user"
  }
}
```
Make a note of the **id** field value (subscription ID) for the next step.

3. Use the `az ad sp` command to create an application as a service principal with Reader role privileges. Substitute `{subscription_id}` in the example below with the **id** value you noted down previously. Note that the `--name` parameter is optional and you can define any name you want for the service principal.
```
az ad sp create-for-rbac --role "Reader" --scopes /subscriptions/{subscription_id} --name http://BadrapAzureApp
```
The output will look like this:
```
Creating 'Reader' role assignment under scope '/subscriptions/11111111-2222-3333-4444-555555666666'
  Retrying role assignment creation: 1/36
The output includes credentials that you must protect. Be sure that you do not include these credentials in your code or
check the credentials into your source control. For more information, see https://aka.ms/azadsp-cli
{
  "appId": "aabbccdd-1122-3344-5566-eeeeffff7777",
  "displayName": "BadrapAzureApp",
  "name": "http://BadrapAzureApp",
  "password": "****************************",
  "tenant": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
}
```

4. Under your Badrap Azure app settings, add your account details. 

<div style="text-align: center;">
   <img src="./azure-30-add-account.png" style="max-width: 95%; width: 480px;" />
</div>

5. Copy the **tenant**, **appId** and **password** values into the app settings: 

- Tenant ID: `tenant`
- Application ID: `appId`
- Client Secret: `password`

6. In a few minutes after the Badrap Azure app has been configured into use, you should see a listing of your Azure assets under [My Assets](https://badrap.io/assets).

<div style="text-align: center;">
   <img src="./azure-99-assets.png" style="max-width: 95%; width: 480px;" />
</div>

7. If you want to stop using the Badrap Azure app, you can delete the service principal with the `az ad sp delete` command:
```
az ad sp delete --id http://BadrapAzureApp
```
The output of the command should be like this:
```
Removing role assignments
```
Then uninstall the Azure app from your Badrap settings page.

## Using Azure Portal

1. Log into your [Azure Portal](https://portal.azure.com). Select Azure Active Directory from the sidebar. 

<div style="text-align: center;">
   <img src="./azure-50-portal.png" style="max-width: 95%; width: 480px;" />
</div>

2. Go to **App Registrations**.

<div style="text-align: center;">
   <img src="./azure-54-appreg.png" style="max-width: 95%; width: 480px;" />
</div>

3. Click **New registration**. Enter the following details:

- Name: Badrap Azure App
- Supported Account Types: Accounts in this organizational directory only (your organization only)
- Redirect URI (optional): leave blank

<div style="text-align: center;">
   <img src="./azure-58-newreg.png" style="max-width: 95%; width: 480px;" />
</div>

4. Click **Register** to complete the new app registration.

5. Now, give Reader permissions to the application. Go to **Subscriptions** via the Azure Portal top search bar or via the left sidebar. 

<div style="text-align: center;">
   <img src="./azure-60-search-subs.png" style="max-width: 95%; width: 480px;" />
</div>

6. Choose the subscription you want to use.

<div style="text-align: center;">
   <img src="./azure-64-choose-sub.png" style="max-width: 95%; width: 480px;" />
</div>

7. Select **Access Control (IAM)** in the subscription page.

<div style="text-align: center;">
   <img src="./azure-68-iam.png" style="max-width: 95%; width: 480px;" />
</div>

8. Click **Add** and select **Add role assignment**.

<div style="text-align: center;">
   <img src="./azure-70-add-role.png" style="max-width: 95%; width: 480px;" />
</div>

9. For "Role", select **Reader**. For "Assign access to", select **User, group or service principal**.

10. In the Select menu, type the name of the application you created in the previous step (e.g. "Badrap Azure App") and click on the search result. The app should now appear in the "Selected members" list. Then click **Save**.

<div style="text-align: center;">
   <img src="./azure-74-role-details.png" style="max-width: 95%; width: 480px;" />
</div>

11. Under **App Registrations**, select the application you created.

<div style="text-align: center;">
   <img src="./azure-78-select-app.png" style="max-width: 95%; width: 480px;" />
</div>

12. Note down the **Directory (tenant) ID** and **Application (client) ID** values. 

<div style="text-align: center;">
   <img src="./azure-80-copy-values.png" style="max-width: 95%; width: 480px;" />
</div>

13. Under the same app, select **Certificates and Secrets** in the Manage menu. 

14. Under "Client secrets", click on **New Client Secret**.

15. For the description field, you can use e.g. `badrapClientSecret`. Select a suitable time for expiration (e.g. one year), and click **Add**.

16. Note down the **Value** field from the generated client secret. 

<div style="text-align: center;">
   <img src="./azure-84-client-secret.png" style="max-width: 95%; width: 480px;" />
</div>

17. Under your Badrap Azure app settings, add a new account. Copy the **Directory (tenant) ID**, **Application (client) ID** and **client secret** values you noted down earlier into the Badrap Azure app settings.

<div style="text-align: center;">
   <img src="./azure-30-add-account.png" style="max-width: 95%; width: 480px;" />
</div>

18. Click **Add account** to save your settings. 

19. In a few minutes after the app has been configured into use, you should see a listing of your Azure assets under [My Assets](https://badrap.io/assets).

<div style="text-align: center;">
   <img src="./azure-99-assets.png" style="max-width: 95%; width: 480px;" />
</div>
