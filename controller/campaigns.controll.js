import Campaign from "../model/campaign.model.js";
import Platform from "../model/platform.model.js";
import GroupNiche from "../model/Niche.model.js";
import Group from "../model/group.model.js";


async function add_to_campaign(req, res) {
    const data = req.body;  // Form data (excluding file)
    const file = req.file;  // Uploaded file (optional)

    try {
        // convert stringified JSON inputs to proper arrays/objects
        const platforms = JSON.parse(data.platforms);
        const group_niche = JSON.parse(data.group_niche);
        const target_by_group = JSON.parse(data.target_by_group);
        const location = data.location ? JSON.parse(data.location) : [];
        const members_range = data.members_range ? JSON.parse(data.members_range) : [];

        // Check if platforms exist in the Platform model
        const existingPlatforms = await Platform.findAll({
            where: { p_id: platforms }
        });
        if (existingPlatforms.length !== platforms.length) {
            return res.status(400).json({
                success: false,
                message: "Some platforms do not exist."
            });
        }

        // Check if group_niche exists in the GroupNiche model
        const existingGroupNiches = await GroupNiche.findAll({
            where: { n_id: group_niche }
        });
        if (existingGroupNiches.length !== group_niche.length) {
            return res.status(400).json({
                success: false,
                message: "Some niche IDs are invalid."
            });
        }

        // Check if target_by_group g_id exists in the Group model
        const groupIds = target_by_group.map(item => item.g_id);
        const existingGroups = await Group.findAll({
            where: { g_id: groupIds }
        });
        if (existingGroups.length !== groupIds.length) {
            return res.status(400).json({
                success: false,
                message: "Some target_by_group IDs do not exist."
            });
        }

        // Create the campaign if all validations pass
        const newCampaign = await Campaign.create({
            name: data.name,
            objective: data.objective,
            platforms: platforms, 
            group_niche: group_niche,
            target_by_group: target_by_group,
            location: location,
            content: data.content,
            img_or_vid: file ? file.buffer : null, // Store uploaded file as binary (if exists)
            schedule_start: new Date(data.schedule_start),
            schedule_end: new Date(data.schedule_end),
            members_range: members_range,
            bid_per_group: parseFloat(data.bid_per_group),
            total_budget: parseFloat(data.total_budget)
        });

        return res.status(201).json({
            success: true,
            message: "Campaign added successfully",
            result: newCampaign
        });

    } catch (error) {
        console.error("Error inserting campaign:", error);
        return res.status(500).json({
            success: false,
            message: "Error inserting campaign",
            error: error.message
        });
    }
}



async function get_all_campaigns(req, res) {
    try {
        const data = await Campaign.findAll(); 

        if (data.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No campaigns found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "All campaigns retrieved successfully",
            result: data
        });

    } catch (error) {
        console.error("Error fetching campaigns:", error);
        return res.status(500).json({
            success: false,
            message: "Error fetching campaigns",
            error: error.message
        });
    }
}


async function get_campaign_by_c_id(req, res) {
    const { c_id } = req.params; 
    if (!c_id) {
        return res.status(400).json({
            success: false,
            message: "Campaign ID (c_id) is required",
        });
    }

    try {
        const data = await Campaign.findOne({ where: { c_id } }); 

        if (!data) {
            return res.status(404).json({
                success: false,
                message: `Campaign with ID ${c_id} not found`,
            });
        }

        return res.status(200).json({
            success: true,
            message: `Campaign with ID ${c_id} retrieved successfully`,
            result: data
        });

    } catch (error) {
        console.error(`Error fetching campaign with ID ${c_id}:`, error);
        return res.status(500).json({
            success: false,
            message: `Error retrieving campaign with ID ${c_id}`,
            error: error.message
        });
    }
}


async function update_c_id_data(req, res) {
    const { c_id } = req.params; // Extract campaign ID from request params
    const data = req.body;  // Form data (excluding file)
    const file = req.file;  // Uploaded file (optional)

    try {
        // check if campaign exists
        const existingCampaign = await Campaign.findByPk(c_id);
        if (!existingCampaign) {
            return res.status(404).json({
                success: false,
                message: `Campaign with c_id ${c_id} not found.`,
            });
        }

        // convert stringified JSON inputs to proper arrays/objects
        const platforms = JSON.parse(data.platforms);
        const group_niche = JSON.parse(data.group_niche);
        const target_by_group = JSON.parse(data.target_by_group);
        
        // check if platforms exist in the Platform model
        const existingPlatforms = await Platform.findAll({
            where: { p_id: platforms }
        });
        if (existingPlatforms.length !== platforms.length) {
            return res.status(400).json({
                success: false,
                message: "Some platforms do not exist."
            });
        }

        // check if group_niche exists in the GroupNiche model
        const existingGroupNiches = await GroupNiche.findAll({
            where: { n_id: group_niche }
        });
        if (existingGroupNiches.length !== group_niche.length) {
            return res.status(400).json({
                success: false,
                message: "Some niche IDs are invalid."
            });
        }

        // check if target_by_group g_id exists in the Group model
        const groupIds = target_by_group.map(item => item.g_id);
        const existingGroups = await Group.findAll({
            where: { g_id: groupIds }
        });
        if (existingGroups.length !== groupIds.length) {
            return res.status(400).json({
                success: false,
                message: "Some target_by_group IDs do not exist."
            });
        }


        //  parse incoming JSON fields if they exist
        const updatedFields = {};
        if (data.name) updatedFields.name = data.name;
        if (data.objective) updatedFields.objective = data.objective;
        if (data.platforms) updatedFields.platforms = JSON.parse(data.platforms);
        if (data.group_niche) updatedFields.group_niche = JSON.parse(data.group_niche);
        if (data.target_by_group) updatedFields.target_by_group = JSON.parse(data.target_by_group);
        if (data.location) updatedFields.location = JSON.parse(data.location);
        if (data.content) updatedFields.content = data.content;
        if (data.schedule_start) updatedFields.schedule_start = new Date(data.schedule_start);
        if (data.schedule_end) updatedFields.schedule_end = new Date(data.schedule_end);
        if (data.members_range) updatedFields.members_range = JSON.parse(data.members_range);
        if (data.bid_per_group) updatedFields.bid_per_group = parseFloat(data.bid_per_group);
        if (data.total_budget) updatedFields.total_budget = parseFloat(data.total_budget);
        if (file) updatedFields.img_or_vid = file.buffer; // Store updated file as binary

        // perform update
        await Campaign.update(updatedFields, {
            where: { c_id }
        });

        return res.json({
            success: true,
            message: `Campaign with c_id ${c_id} updated successfully.`,
            updatedFields
        });

    } catch (error) {
        console.error("Error updating campaign:", error);
        return res.status(500).json({
            success: false,
            message: "Error updating campaign",
            error: error.message
        });
    }
}



async function delete_c_id(req, res) {
    const { c_id } = req.params; 
     


    try {
        //check if campaign exists
        const existingCampaign = await Campaign.findByPk(c_id);
        if (!existingCampaign) {
            return res.status(404).json({
                success: false,
                message: `Campaign with c_id ${c_id} not found.`,
            });
        }

        // also remove from the user table
     



        //perform deletion
        await Campaign.destroy({
            where: { c_id }
        });

        return res.json({
            success: true,
            message: `Campaign with c_id ${c_id} deleted successfully.`,
        });

    } catch (error) {
        console.error("Error deleting campaign:", error);
        return res.status(500).json({
            success: false,
            message: "Error deleting campaign",
            error: error.message
        });
    }
}







export  {add_to_campaign, get_all_campaigns,get_campaign_by_c_id,delete_c_id,update_c_id_data};
