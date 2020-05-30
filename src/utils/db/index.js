import DatabaseHelper from './helper';
import ErrorTableSchema from './schema/error-log-table';
import ProfileTableSchema from './schema/profile-table';
import ScanTableSchema from './schema/scan-table';
import SessionTableSchema from './schema/session-table';

class Database {
    database = null;

    _tableSchema = [
        ProfileTableSchema,
        ErrorTableSchema,
        ScanTableSchema,
        SessionTableSchema,
    ]

    constructor() {
        console.log('db')
        this.database = new DatabaseHelper(
            "tracker.db", "Password",
            this.openDbSuccessCallback.bind(this),
            this.openDbFailureCallback.bind(this)
        );
    }

    errorCB = (error) => {
        console.log(error);
    }

    openDbSuccessCallback = () => {
        this.createTables();
    }

    openDbFailureCallback = (error) => {
        // Log
    }

    createTableSuccessCB = async (transaction, result) => {
        // Actions to be performed on successful creation of table.
    }

    createTableErrorCB = (error) => {
        // Actions to be done when an error occured while creating tables
    }

    async createTables() {
        await this.database.createTables(
            this._tableSchema,
            this.createTableSuccessCB,
            this.createTableErrorCB
        );
    }

    getDBInstance = async () => { return this.database };

}

export default new Database();