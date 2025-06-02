import {Schema, models, model, Document, Types} from 'mongoose';

export interface IVote {
    author: Types.ObjectId;
    actionId: Types.ObjectId;
    actionType: string;
    voteType: string;
}

export interface IVoteDoc extends IVote, Document {}

const VoteSchema = new Schema<IVote>({
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    actionId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    actionType: {
        type: String, enum: ["question", "answer"], required: true
    },
    voteType: {
        type: String, enum: ["upvote", "downvote"], required: true
    }
}, 
{
    timestamps: true
});

const Vote = models?.Vote || model<IVote>("Vote", VoteSchema);

export default Vote;