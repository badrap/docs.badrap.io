(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{362:function(e,t,a){e.exports=a.p+"assets/img/aws-external-id.a2a3be74.jpg"},363:function(e,t,a){e.exports=a.p+"assets/img/aws-another-aws-account.827e6c8e.jpg"},364:function(e,t,a){e.exports=a.p+"assets/img/aws-external-id2.86d140cc.jpg"},365:function(e,t,a){e.exports=a.p+"assets/img/aws-create-policy.ee511b2e.jpg"},366:function(e,t,a){e.exports=a.p+"assets/img/aws-return.e83912f5.jpg"},367:function(e,t,a){e.exports=a.p+"assets/img/aws-90-delete-role.494128c6.png"},368:function(e,t,a){e.exports=a.p+"assets/img/aws-92-delete-policy.35fefe2b.png"},405:function(e,t,a){"use strict";a.r(t);var s=a(45),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"amazon-web-services-aws"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amazon-web-services-aws"}},[e._v("#")]),e._v(" Amazon Web Services (AWS)")]),e._v(" "),s("p",[e._v("This app allows you to synchronize your AWS assets into Badrap and receive security notifications about them. The app needs to be installed and enabled under your Badrap user account to get started. The app fetches a list of your organization's public IP addresses from your AWS installation with your consent, and adds those assets under your Badrap user account. Below, we describe the actions needed in Badrap. We also explain what you need to do in AWS to grant the minimum permissions for Badrap to fetch the public IP addresses.")]),e._v(" "),s("h2",{attrs:{id:"install-the-aws-app-in-badrap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-the-aws-app-in-badrap"}},[e._v("#")]),e._v(" Install the AWS app in Badrap")]),e._v(" "),s("ol",[s("li",[e._v("Open the "),s("a",{attrs:{href:"https://badrap.io/apps/aws",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS app page"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[e._v("Install the app.")]),e._v(" "),s("li",[e._v("Take note of the External ID value that the app has generated for you. You'll need this later.")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(362),alt:"External Id"}})]),e._v(" "),s("h2",{attrs:{id:"create-required-aws-role-policy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-required-aws-role-policy"}},[e._v("#")]),e._v(" Create Required AWS Role & Policy")]),e._v(" "),s("p",[e._v("Setting up the Badrap app with Amazon Web Services requires configuring role delegation using AWS IAM.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Create a new role in the "),s("a",{attrs:{href:"https://console.aws.amazon.com/iam/home#/roles",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS IAM console."),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[e._v("Select "),s("code",[e._v("Another AWS account")]),e._v(" for the role type.")])]),e._v(" "),s("li",[s("p",[e._v("Enter "),s("code",[e._v("808384617942")]),e._v(" (Badrap's Account ID) as the "),s("code",[e._v("Account ID")]),e._v(".\n"),s("img",{attrs:{src:a(363),alt:"Another AWS Acocount"}})])]),e._v(" "),s("li",[s("p",[e._v("Check the "),s("code",[e._v("Require external ID")]),e._v(" option, and enter the External ID that the app generated for you earlier as the "),s("code",[e._v("External ID")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Leave the "),s("code",[e._v("Require MFA")]),e._v(" option unchecked.")])]),e._v(" "),s("li",[s("p",[e._v("Click "),s("code",[e._v("Next: Permissions")]),e._v(".\n"),s("img",{attrs:{src:a(364),alt:"External Id"}})])]),e._v(" "),s("li",[s("p",[e._v("If you've already created a policy, skip the following substeps. Otherwise click "),s("code",[e._v("Create Policy")]),e._v(", which opens a new window.\n"),s("img",{attrs:{src:a(365),alt:"Create Policy"}})]),e._v(" "),s("ol",[s("li",[e._v("Select the "),s("code",[e._v("JSON")]),e._v(" tab and enter the following policy snippet into the text box:")])]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2012-10-17"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Statement"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Sid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"VisualEditor0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Effect"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Allow"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Action"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ec2:DescribeInstances"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"lightsail:GetInstances"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"route53:GetHostedZone"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"route53:ListHostedZones"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"route53:ListResourceRecordSets"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"route53domains:ListDomains"')]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Resource"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[e._v("Click "),s("code",[e._v("Review policy")]),e._v(".")]),e._v(" "),s("li",[e._v("Name the policy (e.g., "),s("code",[e._v("BadrapAppPolicy")]),e._v(").")]),e._v(" "),s("li",[e._v("Click "),s("code",[e._v("Create policy")])]),e._v(" "),s("li",[e._v("Return to the "),s("code",[e._v("Create role")]),e._v(" window.")]),e._v(" "),s("li",[e._v("Refresh the list of policies")])])]),e._v(" "),s("li",[s("p",[e._v("Select the BadrapAppPolicy\n"),s("img",{attrs:{src:a(366),alt:"Create Policy"}})])]),e._v(" "),s("li",[s("p",[e._v("Click "),s("code",[e._v("Next: Tags")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Click "),s("code",[e._v("Next: Review")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Name the role (e.g., "),s("code",[e._v("BadrapAppRole")]),e._v(").")])]),e._v(" "),s("li",[s("p",[e._v("Click "),s("code",[e._v("Create role")]),e._v(".")])])]),e._v(" "),s("h2",{attrs:{id:"finish-the-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#finish-the-installation"}},[e._v("#")]),e._v(" Finish the Installation")]),e._v(" "),s("ol",[s("li",[e._v("Return to the "),s("a",{attrs:{href:"https://badrap.io/apps/aws",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS app page"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[e._v("Enter your "),s("a",{attrs:{href:"https://console.aws.amazon.com/billing/home?#/account",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS Account ID"),s("OutboundLink")],1),e._v(" into the "),s("code",[e._v("Account ID")]),e._v(" field.")]),e._v(" "),s("li",[e._v("Enter the name of the AWS role you created earlier. "),s("strong",[e._v("Note that the role name is case sensitive!")])]),e._v(" "),s("li",[e._v("Click "),s("code",[e._v("Add")]),e._v(".")])]),e._v(" "),s("h2",{attrs:{id:"uninstalling-the-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uninstalling-the-app"}},[e._v("#")]),e._v(" Uninstalling the app")]),e._v(" "),s("p",[e._v("If you want to stop using the Badrap AWS app, you can uninstall it from your Badrap "),s("a",{attrs:{href:"https://badrap.io/apps/aws",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS app page"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("Then you can clean up the app role and policy definitions from your "),s("a",{attrs:{href:"https://console.aws.amazon.com/iam/home#/roles",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS IAM console"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("ol",[s("li",[e._v("Under the "),s("a",{attrs:{href:"https://console.aws.amazon.com/iam/home#/roles",target:"_blank",rel:"noopener noreferrer"}},[e._v("Roles"),s("OutboundLink")],1),e._v(' section, search for the role you created earlier (e.g. "BadrapTestAppRole") and select '),s("strong",[e._v("Delete")]),e._v(".")])]),e._v(" "),s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticStyle:{"max-width":"95%",width:"480px"},attrs:{src:a(367)}})]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[e._v("Under the "),s("a",{attrs:{href:"https://console.aws.amazon.com/iam/home#/policies",target:"_blank",rel:"noopener noreferrer"}},[e._v("Policies"),s("OutboundLink")],1),e._v(' section, search for the policy you created and connected to the role (e.g. "BadrapTestAppPolicy"), and from the '),s("strong",[e._v("Policy actions")]),e._v(" drop-down menu select "),s("strong",[e._v("Delete")]),e._v(".")])]),e._v(" "),s("div",{staticStyle:{"text-align":"center"}},[s("img",{staticStyle:{"max-width":"95%",width:"480px"},attrs:{src:a(368)}})]),e._v(" "),s("p",[e._v("That's it, you have successfully uninstalled the Badrap AWS app and cleaned up its configuration from your AWS installation.")])])}),[],!1,null,null,null);t.default=n.exports}}]);