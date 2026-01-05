const axios = require('axios');
const fs = require('fs');
const path = require('path');
const BSON = require("bson");

module.exports.processXmlFiles = async (req, res) => {
    const { token } = req.body;

    try {
        const xmlFiles = fs.readdirSync(path.join(__dirname, '../../asset')).filter(file => file.endsWith('.xml'));
		const payload = [];

        for (const file of xmlFiles) {
			let xmlContent = fs.readFileSync(path.join(__dirname, '../../asset', file), 'utf8');

			// Remove comments
            xmlContent = xmlContent.replace(/<!--[\s\S]*?-->/g, '');

            // Remove extra spaces, tabs, and newlines
            xmlContent = xmlContent.replace(/\s+/g, ' ').trim();

			 payload.push({
              Type: "ABC",
              Message: xmlContent,
              HostInterfaceCode: "AMPOL",
              UserOperation: "0101ABC",
            });

            console.log(`Payload constructed for file: ${file}`);
        }

		// Convert payload to BSON
        const bsonPayload = BSON.serialize(payload);
		console.log("bsonPayload==>>", bsonPayload);


		let success = 200;
		// Making a POST API call using the token as Authorization Bearer
		await axios.post('https://dev.fuelfacsapp.dev/api/replication/upload/210/generic-message', bsonPayload, {
			headers: {
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/bson'
			}
		}).then((result) => {
			console.log("postResponse==>>", result.data);
		}).catch((err) => {
			console.log("postError==>>", err.request);
			success = 500;
		});

        res.status(success).json({
            message: 'All POST API calls completed successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error processing XML files or calling POST API',
            error: error
        });
    }
};
