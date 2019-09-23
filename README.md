# Project Title
Adding 2 big numbers, which won't fit to any .NET type

### Prerequisites: 
*	Visual Studio 2019
*	.Net Core 2.2 SDK
*   CLI 8.3.5
*	.nodejs
* 	npm
*	EntityFrameworkCore
*	Angular 8.
*	Bootstarp 4
*	Angular Material 8.2.0
*	SQL SQLEXPRESS 12


### Features:
* Add any two numbers no matter how big the numbers are no 
* Server side & Client side validation (both)
* Server side pagination
* Quick add from modal

### Installation: 
* Clone the project. 
* Clean the project using ide. 
* Change the connection string on ‘appsettings.json’ with your Data Source, User Id and Password.
* Build and select 'Misfit.DA' as default project and run 'update-database -verbose' from package manager console to create a blank database.  
* If migration not worked for you, restore the 'MisfitDB.bak' with some dummy data and change the connection string into
	'appsettings.json' file. then run and enjoy :)

### Thinks to mention: 
* If you see any time out error in web browser, don't panic. Please refresh the page again. It'll work again. It can be happened for the cli run