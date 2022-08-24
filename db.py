import pymongo
import pprint

if __name__ == 'main':
    client = pymongo.MongoClient('mongodb+srv://dbUser:vadai123@sih.oeja6rx.mongodb.net/test')
    db = client.test
    collection = db.users
    pprint.pprint(collection.find_one())