# BreederDAO

access the app here
 ```
https://axie-api-breederdao.onrender.com/
 ```
 
or do it locally:

1. First install the dependencies
 ```
npm install
```

2. To start the app, run
```
npm start
```

3. After executing npm start, go to 
```
http://localhost:5200/
```
   or you can edit the port found in server.js
![image](https://github.com/Trianglebucks/BreederDAO/assets/65164451/54df35d2-031e-4b22-b6a4-19f69efefa05)

Do note that you can change the mongoDB database and use your own.
![image](https://github.com/Trianglebucks/BreederDAO/assets/65164451/406e7f88-aeef-42ab-b1a2-b633d405d194)

Once there in the apollo server sandbox:
1. Run the mutation to fetch 300 Axies (sorted by price ascending) from the Axie Infinity GraphQL API
![image](https://github.com/Trianglebucks/BreederDAO/assets/65164451/300ba7ef-a488-4a72-a617-737db7967ec0)

2. To fetch the data from mongoDB, you can define the query with the specific class. In this instance, I fetched the beast class
![image](https://github.com/Trianglebucks/BreederDAO/assets/65164451/8942a486-839a-410a-bac9-fb2c3737bfdd)

3. Run the marketplaceManager in the query in which fetches the data from the axie infinity contract.
![image](https://github.com/Trianglebucks/BreederDAO/assets/65164451/b0a47e08-eca2-48eb-b87e-b84bb9a5265a)



