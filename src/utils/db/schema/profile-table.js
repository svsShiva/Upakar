// Auto Increment ID column will be the primary key is added by default.
const ProfileSchema = {
    name: "Profile",
    columns: [
        { name: "ShowCode", type: "TEXT", default: null, unique: true },
        { name: "ScanOnlineToggle", type: "INTEGER", default: 1 },
        { name: "ShowDataToggle", type: "INTEGER", default: 1 },
        { name: "IsActive", type: "INTEGER", default: 1 },
        { name: "ExpirationDate", type: "TEXT", default: null },
        { name: "CreatedAtTS", type: "TEXT", default: null },
        { name: "ModifiedAtTS", type: "TEXT", default: null }
    ]
}

export default ProfileSchema;


// ToggleEnum = {
//     ON: 1,
//     OFF: 0
// }