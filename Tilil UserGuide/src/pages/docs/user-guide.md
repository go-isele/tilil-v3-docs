# USER MANUAL
## TILIL BULK SMS PORTAL 2.0

**Abstract**
This document describes the basics of how to use Tilil Bulk SMS admin portal to send bulk messages and show progress.

**Author:** Jacob Petro  
**Email:** jacob@tililtech.com

## Visitors Page
This is the landing page which the user is taken to when loading the URL in the browser. Users enter credentials as specified in the email.
![Alt text](/images/login.jpg)


## Forgot Password
The page users visit in case they cannot remember their password. Users enter their username, in this case, it’s the email address used to log in.
![Alt text](/images/ForgotPassword.jpg)

## Signup Page
The page that allows new users to register. Users enter basic details, verify if they are not a robot, and then click submit.
![Alt text](/images/signup.jpg)

## Real-time Dashboard
After a successful login, users are redirected to this page, which has menus and buttons.
![Alt text](/images/dashboard.jpg)

## Bulk SMS Menu
The main page for the bulk SMS module. It contains menus and buttons apart from the left menu.
![Alt text](/images/SMSMenu.jpg)


## Send SMS
Here is the page for sending messages. 
Users select the Sender id, type the message and when user click on schedule checkbox date time input is displayed which allow the user to schedule the date of the message. 
ON the right column user enters the phone number(s) to receive the message. 

![Alt text](/images/sendSMS.jpg)


## More SMS Options
This has sub-menu for Single/Batch Message, Send to Group, Search & Send, Custom Excel, Messages, and Recipients.

### Single/Batch Message
The default screen for sending messages.
![Alt text](/images/batchSMSOption.jpg)

### Send to Group
Sending messages to groups of contacts created from the Address Contact menu. Users select the group(s) to receive the SMS.
![Alt text](/images/GroupSMSOptions.jpg)


### Search & Send
Users can search for contacts per partner in the system and add them to a list to receive SMS. 
Users click on the dashes above the list and under each can specify either text or select option from the dropdown. 
Users compose the SMS and specify the sender id and finally can just send or schedule the message. 

![Alt text](/images/Search&Send.jpg)

### Custom Excel
Uploading excel sheet with contacts and some added information to be used as message content. 
Users can download excel template, fill it up accordingly and the upload it by clicking choose file button. 


![Alt text](/images/customexcell.jpg)

User then clicks Next>> [ENTER CUSTOM MESSAGE] which will have placeholders based on the titles on the uploaded excel worksheet. 
Once the upload process is successful, you get a preview of at least 4 records you have uploaded and as you type your message on the far right you can preview the final message as will be received by recipient. 

![Alt text](/images/CustomEmessage.jpg)

Once you have finished composing your message and click send a summary page will be shown as a below.  

![Alt text](/images/SMSsummary.jpg)


### Messages
Shows messages in real-time being sent. Users can filter using date range, partner, and sender ID. Export to Excel is also available.

![Alt text](/images/messages.jpg)


### Recipients
Shows all message receivers with details. Users can filter using partner, mobile number, network, and date range.
![Alt text](/images/recipients.jpg)

## Address Groups
Shows all address groups. Users can add new groups by clicking on the "Create Address Group" button.
User can filter the address group list using either partner id or group name or description
![Alt text](/images/AddressGroup.jpg)
### Create Address Group
User selects partner, enters the group name, any relevant description, and clicks "Next >> [ADD Contacts]."
![Alt text](/images/CreateGA.jpg)
## Address Contacts
Shows all contacts from all address groups. Users can filter using various criteria. Buttons for adding single contacts, copying contacts from a text file, uploading CSV/Excel, and exporting contacts are available.
AddressContact
![Alt text](/images/AddressContact.jpg)
## My Messaging Account
Contains submenus for messaging account overview, transactions, sender IDs, headers/footers, bulk SMS rates, delivery status URL, delivery statuses, and number blacklist.
![Alt text](/images/MessagingAccount.jpg)
### Overview
Shows an overview of the messaging account.
![Alt text](/images/overview.jpg)

### My Transactions
Shows account-related transactions like adding credit and sending messages.
![Alt text](/images/Transactions.jpg)

### My Sender IDs
Shows all user sender IDs. Users can map new sender IDs.
![Alt text](/images/SenderId.jpg)

### Create Partner sender ID 
Select Partner and the available sender id and click save. This is basically mapping partners to their respective sender IDDs. 
![Alt text](/images/CPartnerSenderid.jpg)

### My Headers/Footers (Reseller Configuration)
Shows all headers and footers for SMS for partners. Reseller users can create new header/footers.
![Alt text](/images/MyHeaderfooter.jpg)

### Bulk SMS Rates
Displays SMS rates per network. Users can create new partner networks.
![Alt text](/images/BulkSMSRate.jpg)

### Delivery Status URLs
Shows configured delivery status URLs. Users can add delivery status URLs.
![Alt text](/images/DeliveryStatusURLs.jpg)

### Delivery Statuses
Displays all delivery statuses for bulk SMS and their detailed descriptions.
Users can add new delivery status, but this is very rare unless the MNO come up with a new status. 
![Alt text](/images/DeliveryStatus.jpg)

### Number Blacklist
Allows users to add blacklisted numbers to prevent sending messages to them.
![Alt text](/images/NumberBlacklist.jpg)

## Partner Transactions
Displays all the wallet transactions for partner with there status. This is especially important for prepaid partners to see how their credit was loaded in the system. 
![Alt text](/images/PartnerTransaction.jpg)

## Partner Users
Enables viewing and updating all users for a partner. Users can create new partner user accounts.
![Alt text](/images/PartnerUsers.jpg)

### Create User
User can create new users and assign menu to either default or custom user group which assign them roles depending with their groups. Once the user click save an email is sent to the new user with a link and credentials which the user will be prompted to change. 
![Alt text](/images/CreateUser.jpg)

### View User Details
Shows details of a specific user. Admin users can reset passwords, update details, or block users.
![Alt text](/images/ViewUserDetails.jpg)

## Group Permissions
Admin users can assign different permissions to different user groups. Users can check or uncheck checkboxes to grant or deny permissions.
![Alt text](/images/GroupPermissions.jpg)

## Daily Usage
Allows users to see SMS summaries sent on a daily basis for a given period. Users can filter by date range.
![Alt text](/images/DailyUsage.jpg)

## User Activity Log
Shows how users are using the system.
![Alt text](/images/ActivityLog.jpg)

## Settings
For developers to integrate the bulk SMS system with their systems. Users enter passwords to view or generate API keys.
![Alt text](/images/Settings.jpg)

## Conclusion
This document is continuously modified with system improvements. In case you find inconsistencies, kindly reach out for clarification.
