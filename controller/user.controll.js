import { where } from 'sequelize';
import User from '../model/user.model.js'; 
import Campaign from '../model/campaign.model.js'
// get a single user by email
async function get_user_data(req, res) {
    try {
        const { email } = req.params;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email parameter is required!",
            });
        }

        console.log("Fetching user with email:", email);

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: `User with email '${email}' not found`,
            });
        }

        res.status(200).json({
            success: true,
            result: user,
            message: "User data retrieved successfully",
        });

    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
}

// get all users
async function get_all_users(req, res) {
    try {
        console.log("Fetching all users...");

        const users = await User.findAll();

        res.status(200).json({
            success: true,
            result: users,
            message: users.length ? "Users retrieved successfully" : "No users found",
        });

    } catch (error) {
        console.error("Error fetching all users:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
}




async function get_all_campaigns_of_user(req, res) {
    const { email } = req.params;
    
    try {
        const user = await User.findOne({
            where: { email },
            attributes: ["campaign_ids"]     
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: `User with email ${email} not found.`,
            });
        }

        if (!user.campaign_ids || user.campaign_ids.length === 0) {
            return res.status(200).json({
                success: true,
                message: "User has no campaigns.",
                result: []
            });
        }

        const campaigns = await Campaign.findAll({
            where: {
                c_id: user.campaign_ids  
            }
        });

        return res.status(200).json({
            success: true,
            message: "User's campaigns fetched successfully",
            result:campaigns
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




export { get_user_data, get_all_users ,get_all_campaigns_of_user };
