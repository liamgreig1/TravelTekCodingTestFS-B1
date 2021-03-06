# TravelTekCodingTestFS-B1

## Setting Up MonogoDB
 
Install MongoDB: (https://docs.mongodb.com/mongocli/stable/install)
Mongo version used: 4.4.1

In the cli:
- mongoimport --db flights --collection flights --type csv --headerline --file flighdata_B.csv
- mongoimport --db flights --collection flight_segments --type csv --headerline --file flighdata_B_segments.csv
- mongo

When mongo is open need to deal with date issue:
- db.flights.find({outdepartdate: {$not: {$type: 9}}}).forEach(function(doc) { doc.outdepartdate = new Date(doc.outdepartdate); db.flights.save(doc); })

## Install NodeJS

Install NVM: (https://itnext.io/nvm-the-easiest-way-to-switch-node-js-environments-on-your-machine-in-a-flash-17babb7d5f1b)

Install Node: (https://nodejs.org/en/download/package-manager/) 
Node version used: 15.7.0

To Run server: npm run start (in the cli)

### Development Help

VSCode Extentions: 
- **Live Server** used to host frontend

![Alt text](./img/Frontend.png?raw=true "Frontend Design")

If there is any issues setting up the development enviroment don't hesitate to contact me by email at: liam.greig1998@googlemail.com