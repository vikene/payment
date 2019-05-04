import {MongoClient, ObjectID} from 'mongodb'
import {makeExecutableSchema} from 'graphql-tools'
import {graphiqlExpress, graphqlExpress} from 'graphql-server-express'
import express from 'express';
import * as bodyParser from 'body-parser';
import cors from "cors";
import { request } from 'https';
const jwt = require('jsonwebtoken');
const helmet = require('helmet')
const expectCt = require('expect-ct')
const https = require('https');
const fs = require('fs');
const winston = require('winston')
var stackify = require('stackify-logger')



export const start = async () => {
    try{
        const MONGOURL = "mongodb://localhost:27017/blog"
        const db = await MongoClient.connect(MONGOURL)
        const user = db.collection("User")
        const friend= db.collection("Friend")
        const wallet = db.collection("Wallet")
        const transaction = db.collection("Transaction")
        var winston = require('winston');
        var {Loggly} = require('winston-loggly-bulk');

        winston.add(new Loggly({
            token: "5fc19af3-4073-4700-aae6-31ff2016e631",
            subdomain: "vikene53",
            tags: ["Winston-NodeJS"],
            json: true
        }));
        
        const prepare = (o) => {
            if(o != null){
                o._id = o._id.toString()
            }
            
            return o
        }
        const jwtConfig = {
            expiresIn: "12h",
            algorithm: "RS256"
        }
        const secret = "thisismysecret";
        const AuthVerification = async function(token, args,callback){
            let _token = jwt.verify(token, secret);
            const failed = {
                "message": "Authentication Failed"
            }
            if(_token !== undefined){
                return await callback(args);
            }else{
                return failed;
            }

        }
        const typeDefs = [`
            type User{
                id: ID,
                username: String,
                email: String,
                ssn: String,
                fname: String,
                lname: String,
                password: String,
                wallet: Wallet,
                walletId: String,
                transactions: [Transaction],
                friends: [Friend]
                token: String
            }
            type Friend{
                id: ID,
                username: String,
                friendusername: String,
                transactions: [Transaction]
            }
            type Wallet{
                id: ID,
                bankname: String,
                routingnumber: String,
                accountnumber: String,
                zipcode: String,
                creditcard: String,
                cvv: String,
                expmonth: String,
                expyear: String,
                amount: Float,
                type: String,
                username: String
            }
            type Transaction{
                id: ID,
                f_username: String,
                t_username: String,
                amount: Float,
                date: String,
                reason: String
            }
            type Query{
                getUser(username: String): User
                getUsers: [User]
                getUserById(_id: String): User
                getAllTransaction: [Transaction]
                getTransaction(username: String): [Transaction]
                getWallet(username: String): Wallet
            }
            type Mutation{
                createUser(username: String,
                    email: String,
                    ssn: String,
                    password: String,
                    fname: String,
                    lname: String) : User
                login(username: String, password: String): User
                addFriend(username: String, friendusername: String): Friend
                addWallet(type: String,bankname: String, routingnumber: String, accountnumber: String, zipcode: String, creditcard: String,
                    cvv: String, expmonth: String, expyear: String, amount: Float, username: String): Wallet
                addTransaction(f_username: String, t_username: String, amount: Float, date: String, reason : String): Transaction
                deleteFriend(username:String, friendusername: String): String
                addMoney(username: String, amount: Float): Wallet
                updateSettings(username: String, fname: String, lname: String, email: String): User
            }
            schema{
                query: Query
                mutation: Mutation
            }
        `]
        const resolvers = {
            Query: {
                
               getUser: async (root, args,context) => {
                   const cb = async (args)=>{
                    return prepare(await user.findOne({username: args.username}));
                   };
                   
                   return await AuthVerification(context.headers.authorization.split("Bearer ")[1],args,cb)   
               },
               getUsers: async (root, args,context) => {
                winston.log('info', args);

                    return (await user.find({}).toArray()).map(prepare)
                   
                   //return await AuthVerification(context.headers.authorization.split("Bearer ")[1],args,cb)
               },
               getAllTransaction: async (root, args,context) =>{
                   const cb = async (args) =>{
                    return (await transaction.find({}).toArray()).map(prepare)
                   }
                   winston.log('info', args);

                   return (await transaction.find({}).toArray()).map(prepare)
                   //return await AuthVerification(context.headers.authorization.split("Bearer ")[1],args,cb)
               },
               getTransaction: async (root, args,context) => {
                   const cb = async (args) =>{
                        return (await transaction.find({$or: [{f_username: args.username}, {t_username: args.username}]}).toArray()).map(prepare)
                   }
                   winston.log('info', args);
                   return await AuthVerification(context.headers.authorization.split("Bearer ")[1],args,cb)
               },
               getWallet: async (root, args, context) =>{
                   const cb = async (args) =>{
                       return prepare(await wallet.findOne({username: args.username}))
                   }
                   winston.log('info getUser', args);
                   return await AuthVerification(context.headers.authorization.split("Bearer ")[1], args, cb)
               }
            },
            User: {
               friends: async ({username}) => {
                   return (await friend.find({username: username}).toArray()).map(prepare)
               },
               transactions: async ({username}) => {
                   return(await transaction.find({f_username: username}).toArray()).map(prepare)
               },
               wallet: async({username})=> {
                   return prepare(await wallet.findOne({username:username}))
               }
            },
            Friend:{
                transactions: async({username,friendusername})=>{
                    return (await transaction.find({f_username: username,t_username:friendusername}).toArray()).map(prepare)
                }
            },
            Mutation:{
                login: async (root, args, context) => {
                    let USER = (await user.findOne({username: args.username, password: args.password}));
                    if(USER !== null){
                        let token = jwt.sign({username: args.username},secret);
                        return Object.assign(USER,{token: token});
                    }else{
                        return {token: null};
                    }
                },
                createUser: async (root, args)=>{
                    const res = await user.insert(args)
                    return prepare(await user.findOne(ObjectID(res.insertedIds[0])))
                },
                addFriend: async(root, args)=>{
                    const res = await friend.insert(args)
                    return prepare(await friend.findOne(ObjectID(res.insertedIds[0])))
                },
                addMoney: async(root, args)=>{
                    const res = await wallet.update({username: args.username},{$set: {amount: args.amount}})
                    return prepare(await wallet.findOne(ObjectID(res.insertedIds[0])))
                },
                addWallet: async(root,args)=>{
                    const res= await wallet.insert(args)
                    return prepare(await wallet.findOne(ObjectID(res.insertedIds[0])))
                },
                addTransaction: async(root,args)=>{
                    const walet = await wallet.findOne({username: args.f_username})
                    const toWallet = await wallet.findOne({username: args.t_username})
                    let amount = walet.amount - args.amount;
                    toWallet.amount += args.amount;
                    walet.amount = amount;
                    const _wallet = await wallet.update({username: args.f_username},walet)
                    const _tWallet = await wallet.update({username: args.t_username}, toWallet)
                    const res= await transaction.insert(args)
                    return prepare(await transaction.findOne(ObjectID(res.insertedIds[0])))
                },
                deleteFriend: async(root,args)=>{
                    const res=await friend.remove({username: args.username, friendusername: args.friendusername});
                    return "ok";
                },
                updateSettings: async(root, args) => {
                    console.log(args)
                    const _user = await user.findOne({username: args.username});
                    _user.email = args.email
                    _user.fname = args.fname
                    _user.lname = args.lname
                    const _ser = await user.update({username: args.username},_user)
                    return prepare(_user)

                }
            }
        }
        const schema = makeExecutableSchema({
            typeDefs,
            resolvers
        })
        const app = express()
        

        app.use(helmet.noSniff())
        app.use(helmet.referrerPolicy({ policy: 'same-origin' }))
        app.use(helmet.permittedCrossDomainPolicies())
        app.use(helmet.xssFilter())
        app.use(helmet.noCache())
        const sixtyDaysInSeconds = 5184000
        app.use(helmet.hsts({
        maxAge: sixtyDaysInSeconds
        }))
        app.use(helmet.dnsPrefetchControl())
        app.use(expectCt({ maxAge: 123 }))

        // Sets Expect-CT: enforce; max-age=123
        app.use(expectCt({
        enforce: true,
        maxAge: 123
        }))

        // Sets Expect-CT: enforce; max-age=30; report-uri="http://example.com/report"
        app.use(expectCt({
        enforce: true,
        maxAge: 30,
        reportUri: 'http://localhost:4000/report'
        }))
        app.use(helmet.featurePolicy({
            features: {
              fullscreen: ["'self'"],
              vibrate: ["'none'"],
              payment: ['example.com'],
              syncXhr: ["'none'"]
            }
          }))
          app.use(helmet.frameguard({ action: 'sameorigin' }))
          app.use(helmet.hidePoweredBy())
          

        app.use("/graphql",bodyParser.json(), graphqlExpress(request => ({
            schema: schema,
            context: request    
        })))
        app.use("/graphiql", graphiqlExpress({
            endpointURL: "/graphql"
        }))
        app.use(express.static('public'))
        https.createServer({
            key: fs.readFileSync('./key.pem'),
            cert: fs.readFileSync('./cert.pem'),
            passphrase: 'radha'
        }, app).listen(4000)
    }
    catch(e){
        console.log(e)
    }
}