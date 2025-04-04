const Tweet = require("../models/tweet");

class TweetRepository {

    async create(data) {
        try{
          const tweet = await Tweet.create(data);
          return tweet;
        } catch(error) {
           console.log(error);
        }
    }

    async get(id) {
        try{
          const tweet = await Tweet.findById(id);
          return tweet;
        } catch(error){
           console.log(error);
        }
    }

    async destroy(id) {
        try{
          const tweet = await Tweet.findByIdAndDelete(id);
          return tweet   
        } catch(error){
            console.log(error);
        }
    }

    async getAll(offset, limit) {
        try{
          const tweet = await Tweet.find().skip(offset).limit(limit);    
          return tweet;
        } catch(error){
            console.log(error);
        }
    }
}

module.exports = TweetRepository;