(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{390:function(e,t,a){e.exports=a.p+"assets/img/gcp-10-create-service-account.6fbda841.png"},391:function(e,t,a){e.exports=a.p+"assets/img/gcp-20-describe-create.5bef40fc.png"},392:function(e,t,a){e.exports=a.p+"assets/img/gcp-30-grant-roles.bffd681a.png"},393:function(e,t,a){e.exports=a.p+"assets/img/gcp-40-create-key.c62c1d22.png"},394:function(e,t,a){e.exports=a.p+"assets/img/gcp-50-permissions.532312d1.png"},395:function(e,t,a){e.exports=a.p+"assets/img/gcp-60-add-account.0e96dd25.png"},396:function(e,t,a){e.exports=a.p+"assets/img/gcp-70-my-assets.f84f767d.png"},397:function(e,t,a){e.exports=a.p+"assets/img/gcp-90-delete-service-account.e2e9a283.png"},424:function(e,t,a){"use strict";a.r(t);var o=a(45),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"google-cloud-platform-app"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#google-cloud-platform-app"}},[e._v("#")]),e._v(" Google Cloud Platform App")]),e._v(" "),o("p",[e._v("This app allows you to synchronize your Google Cloud Platform (GCP) assets into Badrap and receive security notifications about them. If you are not the owner or your organization's GCP project or projects, you will need help from the owner.")]),e._v(" "),o("p",[e._v("First, the owner of your organization's GCP project(s) creates a service account, downloads a key for it, and delivers the key to the Badrap GCP app user. Badrap GCP app user loads the key to the Badrap GCP app. Once installed, the app maintains a list of your organization's assets and add those assets under your Badrap user account. Namely:")]),e._v(" "),o("ul",[o("li",[e._v("public IP-addresses from your GCP installation")]),e._v(" "),o("li",[e._v("domain names, if GCP also hosts your DNS")]),e._v(" "),o("li",[e._v("public IP-addresses of your Google Kubernetes Engine clusters' control planes")])]),e._v(" "),o("h2",{attrs:{id:"i-am-the-owner-of-the-gcp-project"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#i-am-the-owner-of-the-gcp-project"}},[e._v("#")]),e._v(" I am the owner of the GCP project")]),e._v(" "),o("p",[e._v("Create a service account with limited access:")]),e._v(" "),o("ol",[o("li",[e._v("Go to "),o("a",{attrs:{href:"https://console.cloud.google.com/iam-admin/serviceaccounts",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://console.cloud.google.com/iam-admin/serviceaccounts"),o("OutboundLink")],1),e._v(" (log in if necessary).")]),e._v(" "),o("li",[e._v("Select the project which public assets are going to be shared")]),e._v(" "),o("li",[e._v("Click on the "),o("strong",[e._v("Create service account")]),e._v(" button.")])]),e._v(" "),o("div",{staticStyle:{"text-align":"center"}},[o("img",{attrs:{src:a(390)}})]),e._v(" "),o("ol",{attrs:{start:"4"}},[o("li",[e._v("On the "),o("em",[e._v("Service account details")]),e._v(' area, give the account any name you want (for example "Service account for badrap.io").\n'),o("ul",[o("li",[e._v("Optionally add a description so you can remember what this service account is for.")]),e._v(" "),o("li",[e._v("Click the "),o("strong",[e._v("Create")]),e._v(" button.")])])])]),e._v(" "),o("div",{staticStyle:{"text-align":"center"}},[o("img",{staticStyle:{"max-width":"95%",width:"480px"},attrs:{src:a(391)}})]),e._v(" "),o("ol",{attrs:{start:"5"}},[o("li",[e._v("On the "),o("em",[e._v("Service account permissions")]),e._v(" area, select the role "),o("em",[e._v("Compute Viewer")]),e._v(".\n"),o("ul",[o("li",[e._v("Click "),o("strong",[e._v("Add another role")]),e._v(" and add the "),o("em",[e._v("DNS Reader")]),e._v(" role.")]),e._v(" "),o("li",[e._v("Click "),o("strong",[e._v("Add another role")]),e._v(" and add the "),o("em",[e._v("Kubernetes Engine Cluster Viewer")]),e._v(" role.")]),e._v(" "),o("li",[e._v("Click the "),o("strong",[e._v("Continue")]),e._v(" button.")])])])]),e._v(" "),o("div",{staticStyle:{"text-align":"center"}},[o("img",{staticStyle:{"max-width":"95%",width:"480px"},attrs:{src:a(392)}})]),e._v(" "),o("ol",{attrs:{start:"6"}},[o("li",[o("p",[e._v("On the "),o("em",[e._v("Grant users access to this service account")]),e._v(" area, leave the fields empty and click the "),o("strong",[e._v("Done")]),e._v(" button. You will be taken back to the project's "),o("em",[e._v("Service accounts")]),e._v(" page.")])]),e._v(" "),o("li",[o("p",[e._v("On the "),o("em",[e._v("Service accounts")]),e._v(" page, find the row for the account you created, and click the three dots on the right.")]),e._v(" "),o("ul",[o("li",[e._v("Click "),o("strong",[e._v("Manage keys")]),e._v(".")]),e._v(" "),o("li",[e._v("From the "),o("strong",[e._v("Add key")]),e._v(" drop-down menu, select "),o("strong",[e._v("Create new key")]),e._v(".")]),e._v(" "),o("li",[e._v("When the key creation dialog opens, select "),o("strong",[e._v("JSON")]),e._v(" as the key type and click "),o("strong",[e._v("Create")]),e._v(".")]),e._v(" "),o("li",[e._v("The key file is downloaded to your computer.")]),e._v(" "),o("li",[e._v("Close the dialog by clicking the "),o("strong",[e._v("Close")]),e._v(" button.")])])])]),e._v(" "),o("div",{staticStyle:{"text-align":"center"}},[o("img",{attrs:{src:a(393)}})]),e._v(" "),o("p",[e._v("If you completed this process on behalf of someone else, deliver them the JSON key file containing the key to the service account. Delete the JSON key file from your local storage, once you don't need it anymore.")]),e._v(" "),o("h2",{attrs:{id:"i-am-the-badrap-user"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#i-am-the-badrap-user"}},[e._v("#")]),e._v(" I am the Badrap user")]),e._v(" "),o("p",[e._v("Install the Google Cloud Platform app.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Open the "),o("a",{attrs:{href:"https://badrap.io/apps/gcp",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud Platform app page"),o("OutboundLink")],1),e._v(" in Badrap and click the "),o("strong",[e._v("Install")]),e._v(" button.")])]),e._v(" "),o("li",[o("p",[e._v("The app will need your consent to "),o("em",[e._v("create and manage assets")]),e._v(" under your Badrap user account. Click Install the app to give your consent.")])])]),e._v(" "),o("div",{staticStyle:{"text-align":"center"}},[o("img",{attrs:{src:a(394)}})]),e._v(" "),o("ol",{attrs:{start:"3"}},[o("li",[e._v("Click the "),o("strong",[e._v("Add a new account")]),e._v(" button. Upload the JSON key file you received or downloaded. Remember to delete the local file once the installation is finished and working.")])]),e._v(" "),o("div",{staticStyle:{"text-align":"center"}},[o("img",{staticStyle:{"max-width":"95%",width:"480px"},attrs:{src:a(395)}})]),e._v(" "),o("ol",{attrs:{start:"4"}},[o("li",[e._v("Congratulations! You are all done. Check the "),o("a",{attrs:{href:"https://badrap.io/assets",target:"_blank",rel:"noopener noreferrer"}},[e._v("My assets page"),o("OutboundLink")],1),e._v(" and find the section "),o("em",[e._v("Google Cloud Platform")]),e._v(" from your asset list. You should see your public IP-addresses. If your DNS records are also under your GCP project, you should see your domain names in the list too.")])]),e._v(" "),o("div",{staticStyle:{"text-align":"center"}},[o("img",{staticStyle:{"max-width":"95%",width:"480px"},attrs:{src:a(396)}})]),e._v(" "),o("h2",{attrs:{id:"uninstalling-the-app"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#uninstalling-the-app"}},[e._v("#")]),e._v(" Uninstalling the app")]),e._v(" "),o("ol",[o("li",[e._v("Open the "),o("a",{attrs:{href:"https://badrap.io/apps/gcp",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud Platform app page"),o("OutboundLink")],1),e._v(" and click "),o("strong",[e._v("Uninstall")]),e._v(".")]),e._v(" "),o("li",[e._v("Go to "),o("a",{attrs:{href:"https://console.cloud.google.com/iam-admin/serviceaccounts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Service accounts"),o("OutboundLink")],1),e._v(" in your Google Cloud Platform console.")]),e._v(" "),o("li",[e._v("Select the project whose assets you have been following with the Badrap GCP app.")]),e._v(" "),o("li",[e._v("Search for the service account you created earlier for the Badrap GCP app and select "),o("strong",[e._v("Delete")]),e._v(" from the Actions menu on the right.")])]),e._v(" "),o("div",{staticStyle:{"text-align":"center"}},[o("img",{attrs:{src:a(397)}})]),e._v(" "),o("ol",{attrs:{start:"5"}},[o("li",[e._v("You have now successfully uninstalled the app and cleaned up its configuration from your GCP installation.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);