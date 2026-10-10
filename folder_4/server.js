const dns = require("node:dns")

dns.setServers(["8.8.8.8", "8.8.4.4"])

const app = require("./src/app")
const connectDB = require("./src/db/db")

async function startServer() {
    try {
        await connectDB()
        app.listen(3000, () => {
            console.log("Server is running on port 3000")
        })
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error)
        process.exit(1)
    }
}

startServer()