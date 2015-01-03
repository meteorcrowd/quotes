Quotes = new Mongo.Collection("quotes");
Quotes.attachSchema(new SimpleSchema({
    quote: {
        type: String,
        label: "Quote"
    },
    tags: {
        type: [String],
        label: "Tags"
    }
}));
