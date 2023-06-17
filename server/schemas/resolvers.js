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
        addUser: async (parent, { firstName, lastName, gender, email, password }) => {
            const user = await User.create({ firstName, lastName, gender, email, password });
            const token = signToken(user);
            // return user;
            return { token, user };
        },

        addJob: async (_, args) => {
            const job = await Job.create(args);
            return job;
        },
        login: async (_, { email, password }) => {
            console.log(email, password);
            const user = await User.findOne({ email });
            console.log(user);
            const correctPassword = user.isCorrectPassword(password);
            const token = signToken(user);
            // return { token, user };
            return user;
        },
        updateJob: async (parent, { _id, companyName, location, jobTitle, description, position, salary }) => {
            return await Job.findOneAndUpdate(
                { _id: ID },
                { companyName: String },
                { location: String },
                { jobTitle: String },
                { description: String },
                { position: String },
                { salary: String },
                { new: true }


            );
        },
        removeJob: async (parent, { _id }) => {
            return await Job.findOneAndDelete({ _id: ID })
        },
        removeUser: async (parent, { _id }) => {
            return await User.findOneAndDelete({ _id: ID })
        },
        updateUser: async (parent, { _id, firstName, lastName, gender, email, password }) => {
            return await User.findOneAndUpdate(
                { _id: ID },
                { firstName: String },
                { lastName: String },
                { gender: String },
                { email: String },
                { password: String },
                { new: true }
            );
        }
    }
};

module.exports = resolvers;