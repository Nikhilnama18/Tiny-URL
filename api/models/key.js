const mongoose = require('mongoose');

const linkSchema = mongoose.Schema
    ({
        // id: mongoose.Schema.Types.ObjectId,
        link: String,
        key: String
    });

module.exports = mongoose.model('Keys', linkSchema);