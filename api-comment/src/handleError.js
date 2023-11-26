const handleError = (error, req, res, next) => {
    res.status(400);
    console.error(error);

    const message = error.message;

    const unauthorizedIdentifier = "invalid signature";
    const tokenIdentifier = "Cannot read property 'split'";
    const malformad = "jwt malformed";
    const expired = "jwt expired";

    if (
        message &&
        (message.startsWith(unauthorizedIdentifier) ||
            message.startsWith(tokenIdentifier) ||
            message.startsWith(malformad) ||
            message.startsWith(expired))
    ) {
        res.status(403);
    }

    if (message && message.startsWith("Email in use")) {
        res.status(409);
    }

    if (message && message.startsWith("Email or password not exists")) {
        res.status(401);
    }

    res.json({ message, success: false });
};

export default handleError;
