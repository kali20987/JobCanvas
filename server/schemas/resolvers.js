const { User, Job } = require('../models');


const resolvers = {
    Query: {
        viewUsers: async () => {
            return await User.find();
        },

        viewJobs: async () => {
            return await Job.find();
        }

    },

    Mutation: {
        addUser: async (_, args) => {
            const user = await User.create(args);
            return user;
        },

        addJob: async (_, args) => {
            const job = await Job.create(args);
            return job;
        }

    }
};

module.exports = resolvers;