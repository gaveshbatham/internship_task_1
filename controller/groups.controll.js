import Groups from '../model/group.model.js'; // Import the Groups model

// Get a single group by ID
async function get_one_Groups_data(req, res) {
    try {
        const { g_id } = req.params;

        if (!g_id) {
            return res.status(400).json({
                success: false,
                message: "Group ID is required!",
            });
        }

        console.log("Fetching group with ID:", g_id);

        const group = await Groups.findOne({ where: { g_id } });

        if (!group) {
            return res.status(404).json({
                success: false,
                message: `Group with ID '${g_id}' not found`,
            });
        }

        res.status(200).json({
            success: true,
            result: group,
            message: "Group data retrieved successfully",
        });

    } catch (error) {
        console.error("Error fetching group data:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
}

// Get all groups
async function get_all_Groups(req, res) {
    try {
        console.log("Fetching all groups...");

        const groups = await Groups.findAll();

        res.status(200).json({
            success: true,
            result: groups,
            message: groups.length ? "Groups retrieved successfully" : "No groups found",
        });

    } catch (error) {
        console.error("Error fetching all groups:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
}

export { get_one_Groups_data, get_all_Groups };
