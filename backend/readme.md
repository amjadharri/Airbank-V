# Here is how to setup and start the Application

1. For installing the pakages:
   `npm install`

2. For writting the migrations:
   `npx prisma generate --schema=./schema.prisma`

3. For running the server :
   `npm run start`

   `The output should look like : Express is listening at http://localhost:{port}`

   `You can find the Graphql at 'http://localhost:5000/graphql?`

# API Documentation

1. Fetch transactions or Filter
   This API is Responseable for listing/filtering transactions against "start_date" and "end_date" both provided

   API = `

   {

   list(start_date :"some date", end_date : "some date") {
   id
   account
   description
   category
   reference
   currency
   amount
   status
   transactionDate
   createdAt
   updatedAt

   }

`

2.  Transaction Detail API
    This API expects "transaction_id" in against which transaction details are fetched.

        `
        transactionDetail(transaction_id :"63b4a3df-5940-43ce-b6fa-123e06f85d83"){
        id
        account
        description
        category
        reference
        currency
        amount
        status
        transactionDate
        createdAt

        }

`
