import SQLite from 'react-native-sqlite-storage';

export default class DatabaseHelper {
    database = null

    constructor(name, key, openDbSuccessCallback) {
        this.openDatabase(name, key, openDbSuccessCallback);
    }

    openDatabase = (name, key, openDbSuccessCallback, openDbFailureCallback) => {
        try {
            this.database = SQLite.openDatabase({ name: name, key: key }, openDbSuccessCallback, openDbFailureCallback);
        } catch (error) {
            this.errorCB(error);
        }
    }

    closeDatabase = async () => {
        await this.database.close(() => {
        }, this.errorCB)
    }

    errorCB = (error) => {
        console.log("error in query", error)
    }

    preparedStatements = (data, type) => {
        switch (type.toLocaleLowerCase()) {
            case "create":
                return this.generateCreateStatements(data)
            case "select":
                return this.generateSelectStatements(data)
            case "insert":
                return this.generateInsertStatements(data)
            case "update":
                return this.generateUpdateStatements(data)
            case "delete":
                return this.generateDeleteStatements(data)
            case "proxydelete":
                return this.generateProxyDeleteStatements(data)
            default:
                throw "Cannot create statement"
        }
    }

    createTables = (schema, successCb, errorCb) => {
        let statements = this.preparedStatements(schema, "create")
        this.database.transaction(transaction => {
            for (let i = 0; statements && i < statements.length; i++) {
                transaction.executeSql(statements[i], [], successCb, errorCb)
            }
        }, error => this.errorCB(error))
    }

    insertData = async (data, successCb, errorCb) => {
        let { statements, params } = this.preparedStatements(data, "insert")
        await this.database.transaction(async transaction => {
            for (let i = 0; i < statements.length; i++) {
                await transaction.executeSql(statements[i], params[i], successCb, errorCb);
            }
        }, error => this.errorCB(error))
    }

    updateData = async (data, successCb, errorCb) => {
        let statements = this.preparedStatements(data, "update")
        await this.database.transaction(async transaction => {
            for (let i = 0; statements && i < statements.length; i++) {
                await transaction.executeSql(statements[i], [], successCb, errorCb)
            }
        }, error => this.errorCB(error))
    }


    selectData = async (data, successCb, errorCb) => {
        let statements;
        statements = this.preparedStatements(data, "select")
        await this.database.transaction(async transaction => {
            for (let i = 0; statements && i < statements.length; i++) {
                await transaction.executeSql(statements[i], [], successCb, errorCb)
            }
        },
            error => this.errorCb(error))
    }

    deleteData = async (data, successCb, errorCb) => {
        let statements

        statements = this.preparedStatements(data, "proxyDelete")

        try {
            await this.database.transaction(async transaction => {
                for (let i = 0; statements && i < statements.length; i++) {
                    await transaction.executeSql(statements[i], [], successCb, errorCb)
                }
            })
        } catch (error) {
            this.errorCB(error)
        }
    }

    deleteDataPermanent = async (data, successCb, errorCb) => {
        let statements

        statements = this.preparedStatements(data, 'delete')

        try {
            await this.database.transaction(async transaction => {
                for (let i = 0; statements && i < statements.length; i++) {
                    await transaction.executeSql(statements[i], [], successCb, errorCb)
                }
            })
        } catch (error) {
            this.errorCB(error);
        }
    }

    deleteAllDataInTable = async (tableName, successCb, errorCb) => {

        let statement = "DELETE FROM `" + tableName + "`  ;"

        this.database.transaction(transaction => {
            transaction.executeSql(statement, [], successCb, errorCb)
        }, error => this.errorCB(error))
    }

    executeQuery = async (statement, successCb, errorCb, params = []) => {
        try {
            await this.database.transaction(async transaction => {
                await transaction.executeSql(statement, params, successCb, errorCb)
            }, (error) => {
                throw error;
            })
        }
        catch (error) {
            if (error) {
                this.errorCB(error)
            } else {
                this.errorCB();
            }
        }
    }

    generateCreateStatements = tables => tables.map(table => this.generateCreateStatement(table))

    generateSelectStatements = data => {
        let tables = Object.keys(data)
        let statements = Object.values(data).map((table, index) => this.generateSelectStatement(table, tables[index]))

        return statements
    }

    generateInsertStatements = data => {
        let statements = []
        let params = []
        let tables = Object.keys(data)
        Object.values(data).map((table, index) => {
            let result = this.generateInsertStatement(table, tables[index]);
            statements = [...statements, ...result.statements]
            params = [...params, ...result.params]
        })
        return {
            statements,
            params
        }
    }

    generateUpdateStatements = data => {
        let tables = Object.keys(data)
        let statements = Object.values(data).map((table, index) => this.generateUpdateStatement(table, tables[index]))
        return [].concat.apply([], statements)
    }

    generateDeleteStatements = data => {
        let tables = Object.keys(data)
        let statements = Object.values(data).map((table, index) => this.generateDeleteStatement(table, tables[index]))

        return [].concat.apply([], statements)
    }

    generateProxyDeleteStatements = data => {
        let tables = Object.keys(data)
        let statements = Object.values(data).map((table, index) => this.generateProxyDeleteStatement(table, tables[index]))

        return [].concat.apply([], statements)
    }

    generateCreateStatement = (table) => {
        let statement = "CREATE TABLE IF NOT EXISTS `" + table.name + "` ( "

        if ((table.primaryKeys == undefined) || (table.primaryKeys.length === 0)) {
            statement += "`ID` INTEGER PRIMARY KEY AUTOINCREMENT, "
        }
        table.columns.map((column, index) => {
            statement += "`" + column.name + "` " + column.type;

            if (column.default !== undefined) {
                statement += " DEFAULT " + column.default;
            }
            if (column.notNull == true) {
                statement += " NOT NULL"
            }
            if (column.autoIncrement == true && column.type === "INTEGER") {
                statement += " AUTO INCREMENT"
            }
            if (column.unique == true) {
                statement += " UNIQUE"
            }
            statement = statement + ", ";
        })
        if (table.foreignKeys != undefined || table.foreignKeys != null) {
            table.foreignKeys.map(foreignKey => {
                let column_index = foreignKey.column_index
                delete foreignKey.column_index
                let table_name = Object.keys(foreignKey)[0]
                statement += "FOREIGN KEY(`" + table.columns[column_index].name + "`) REFERENCES " + table_name + "(`" + foreignKey[table_name] + "`), "
            })
        }
        if ((table.primaryKeys != undefined && table.primaryKeys != null) &&
            (typeof (table.primaryKeys) == "object" && table.primaryKeys.length > 0)) {
            statement += "PRIMARY KEY (";
            table.primaryKeys.map(index => {
                statement = statement + table.columns[index].name + ", "
            })
            statement = statement.slice(0, -2) + "), ";
        }
        statement = statement.slice(0, -2) + ');'
        return statement
    }

    generateSelectStatement = (data, tableName) => {
        let statement = "SELECT "

        data.columns.map(column => statement += "`" + column + "`, ")
        statement = statement.slice(0, -2) + " FROM `" + tableName + "`";
        statement += data["condition"] ? " WHERE " + data["condition"] + ";" : ";"

        return statement
    }

    generateInsertStatement = (data, tableName) => {
        let statements = []
        let params = []
        data.map(row => {
            let statement = "INSERT INTO `" + tableName
            let columns = "` ("
            let cells = " ("
            let values = Object.values(row)
            Object.keys(row).map((column) => {
                columns += "`" + column + "`, "
                cells += "?, "
            })
            statement += columns.slice(0, -2) + ') VALUES' + cells.slice(0, -2) + ");"
            statements.push(statement)
            params.push(values);
        })
        return {
            statements,
            params
        }
    }

    generateUpdateStatement = (data, tableName) => {
        let statements = []

        data.map(row => {
            let statement = "UPDATE `" + tableName + "` SET "
            let values = Object.values(row.values)

            Object.keys(row.values).map((column, index) => {
                statement += "`" + column + "` = '" + values[index] + "', "
            }
            )
            if (row["where"]) {
                statement = statement.slice(0, -2) + " WHERE " + row["where"] + ";"
            }
            else {
                statement = statement.slice(0, -2) + ";"
            }
            statements.push(statement)
        })
        return statements
    }

    generateDeleteStatement = (data, tableName) => {
        let statements = []

        data.map(row => {
            let identifier = Object.keys(row)
            let statement = "DELETE FROM `" + tableName + "` WHERE " + identifier + " = " + row[identifier] + ";"

            statements.push(statement)
        })

        return statements
    }

    generateProxyDeleteStatement = (data, tableName) => {
        data = data.map(table => {
            table["values"] = { deleted: 1 }

            return table
        })

        return this.generateUpdateStatement(data, tableName)
    }
}