# WasteWatch
Welcome to the WasteWatch Proof of Concept

# Running the POC
1. **Download and Install NodeJS.  Ensure that this worked by running:**
```bash
node -v
```
and 
```bash
npm -v
```
2. **Clone the repository to your local environment by running**
```bash
git clone https://github.com/BenIncollingo/3296POC.git
```
3. **Install the dependencies by running:**
```bash 
npm install
```
make sure you only run this in the root directory
this will install all the packages used in the project - it could take a minute or two to run
4. **In the root directory of the project run:**
```bash
npm start
```
this will run the processses for both the frontend and backend at the same time

5. **In your browser, naviate to:**
```url
http://localhost:3000
```
this should happen autmatically, but if it doesn't you should do it yourself

6. **Enter a Philadelphia address into the text box**

obviously this is just a proof of concept, and a mojority of the abilities of the software are not here.  right now it just takes an address and tells you the trash day.

Please also note: if you enter an address that is not in Philly, it will not work.

# Output
This POC takes in your address and outputs your trash day by using the City of Philadelphia’s API to get information on your area. This version includes both a frontend (React) and a backend (Express), and is structured to scale. In the future, cloud computing services will be integrated to turn this into a full-scale software platform.