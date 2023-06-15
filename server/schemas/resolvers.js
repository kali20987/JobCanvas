const { User, Job } = require('../models');
const { signToken } = require("../utils/auth");

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
            const token = signToken(user);
            // return user;
            return { token, user };
        },

        addJob: async (_, args) => {
            const job = await Job.create(args);
            return job;
        },
        login: async (_, {email, password}) => {
            const user = await User.findOne({email});
            const correctPassword = user.isCorrectPassword(password);
            const token = signToken(user);
            // return { token, user };
            return user;
        }

    }
};

module.exports = resolvers;