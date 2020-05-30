const SessionSchema = {
    name: "Session",
    foreignKeys: [
        {
            Profile: "ID",
            column_index: 1
        }
    ],
    columns: [
        { name: "SessionID", type: "TEXT", default: null },
        { name: "ProfileID", type: "INTEGER", default: null },
        { name: "Name", type: "TEXT", default: null },
        { name: "Venue", type: "TEXT", default: null },
        { name: "IsActive", type: "INTEGER", default: 1 },
        { name: "StartDateTS", type: "TEXT", default: null },
        { name: "EndDateTS", type: "TEXT", default: null },
        { name: "CreatedAtTS", type: "TEXT", default: null },
        { name: "ModifiedAtTS", type: "TEXT", default: null }
    ]
}

export default SessionSchema;

// IsActive = {
//     TRUE: 1,
//     FALSE: 0
// }