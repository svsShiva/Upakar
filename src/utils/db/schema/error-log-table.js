// Auto Increment ID column will be the primary key is added by default.
const ErrorSchema = {
    name: "Error",
    columns: [
        { name: "Message", type: "TEXT", default: null },
        { name: "Stack", type: "TEXT", default: null },
        { name: "OccuredAtTS", type: "TEXT", default: null },
    ]
}

export default ErrorSchema;