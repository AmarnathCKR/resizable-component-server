const Session = require("../database/sessionShema.js")

module.exports.sessionTrackMiddleware = async (req, res, next) => {

    console.log("tracking user");

    const sessionId = req.session.id;

    try {
        let action = req.path;
        action = action.slice(8);

        if (action !== "add" && action !== "update") {
            console.log(action)
            return next()
        }

        const userAgent = req.headers["user-agent"];
        const isMobile = /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile/.test(
            userAgent
        );

        console.log(isMobile);
       

        // Log session
        const session = new Session({
            sessionId,
            lastActivity: new Date(),
            isMobile,
            action
        });

        await session.save();
        console.log("New session logged:", sessionId);


        next()

    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error");
    }
}