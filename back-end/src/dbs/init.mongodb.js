'use strict'

const mongoose = require('mongoose')

const uri = "mongodb+srv://hothanhtung12:gDUOhoO2bUC4itCF@cluster0.ib0vmxo.mongodb.net/";

class Database{
    constructor() {
        this.connect()
    }

    // connect
    connect(type = 'mongodb'){
        if(1 === 1){
            mongoose.set('debug', true)
            mongoose.set('debug', {color: true})
        }

        mongoose.connect(uri).then(_ => {
            console.log('Connect mongodb Success')
        })
        .catch(err => console.log('Connect mongodb err::', err.message))
    }

    static getInstance(){
        if(!Database.instance){
            Database.instance = new Database()
        }
        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb