const ScanSchema = {
    name: "Scan",
    foreignKeys: [
        {
            Profile: "ID",
            column_index: 0
        },
        {
            Session: "ID",
            column_index: 1
        }
    ],
    columns: [
        { name: "ProfileID", type: "INTEGER", default: null },
        { name: "SessionID", type: "INTEGER", default: null },
        { name: "Value", type: "TEXT", default: null },
        { name: "Type", type: "TEXT", default: null },
        { name: "IsUploaded", type: "TEXT", default: "false" },
        { name: "CreatedAtTS", type: "TEXT", default: null },
        { name: "ModifiedAtTS", type: "TEXT", default: null }
    ]
}

export default ScanSchema;