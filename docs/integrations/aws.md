# Amazon Web Services (AWS)

## Overview

Connect to Amazon Web Services to automatically bring your cloud assets into Badrap for monitoring.

## Installation

Setting up the Badrap integration with Amazon Web Services requires configuring role delegation using AWS IAM.

1. Create a new role in the [AWS IAM console.](https://console.aws.amazon.com/iam/home#/roles)
2. Select `Another AWS account` for the role type.
3. Enter `REPLACE_WITH_ID` (Badrap's Account ID) as the `Account ID`.
4. Generate an external ID on the [AWS integration page](#). 
4. Check the `Require external ID` option, and enter the generated ID as the `External ID`.
5. Leave the `Require MFA` option unchecked.
6. Click `Next: Permissions`.
7. If you've already created a policy, skip the following substeps. Otherwise click `Create Policy`, which opens a new window.
    1. Select the `JSON` tab and enter our [policy snippet](#badrap-aws-iam-policy) into the textbox.
    2. Click `Review policy`.
    3. Name the policy (e.g., `BadrapAssetSourcePolicy`).
    4. Click `Create policy`
    5. Return to the `Create role` window.  
8. Refresh the list of policies and select the policy you just created.
9. Click `Next: Tags`.
10. Click `Next: Review`.
11. Name the role (e.g., `BadrapAssetSourceRole`).
12. Continue to [configuration](#configuration).

## Configuration

Once you have created an AWS role you can enable the integration.

1. Open the [AWS integration page](#).
2. Enter your [AWS Account ID](https://console.aws.amazon.com/billing/home?#/account) into the `Account ID` field.
3. Enter the name of the AWS role you created earlier. **Note that the role name is case sensitive!**
4. Click `Add`.

## Badrap AWS IAM policy
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "ec2:DescribeInstances",
                "lightsail:GetInstances",
                "ec2:DescribeRegions",
                "lightsail:GetRegions"
            ],
            "Resource": "*"
        }
    ]
}
```
