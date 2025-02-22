
import Platform from "../model/platform.model.js"; // Import the Platform model

//get a single platform by ID
async function get_one_Platform_data(req, res) {
    try {
        const { p_id } = req.params;

        if (!p_id) {
            return res.status(400).json({
                success: false,
                message: "Platform ID is required!",
            });
        }

        console.log("Fetching platform with ID:", p_id);

        const platform = await Platform.findOne({ where: { p_id } });

        if (!platform) {
            return res.status(404).json({
                success: false,
                message: `Platform with ID '${p_id}' not found`,
            });
        }

        res.status(200).json({
            success: true,
            result: platform,
            message: "Platform data retrieved successfully",
        });

    } catch (error) {
        console.error("Error fetching platform data:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
}

// get all platforms
async function get_all_Platforms(req, res) {
    try {
        console.log("Fetching all platforms...");

        const platforms = await Platform.findAll();

        res.status(200).json({
            success: true,
            result: platforms,
            message: platforms.length ? "Platforms retrieved successfully" : "No platforms found",
        });

    } catch (error) {
        console.error("Error fetching all platforms:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
}

export { get_one_Platform_data, get_all_Platforms };
