import Niche from '../model/niche.model.js';

//Fetch all niches
async function get_all_niche(req, res) {
    try {
        const niches = await Niche.findAll();

        res.status(200).json({
            success: true,
            result: niches,
            message: niches.length ? "Here are all the niche data" : "No niches found!",
        });
    } catch (err) {
        console.error("Error fetching niche data:", err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch niche data",
            error: err.message,
        });
    }
}

// Fetch a single niche by ID
async function get_one_niche_data(req, res) {
    try {
        const { n_id } = req.params;

        if (!n_id) {
            return res.status(400).json({ 
                success: false, 
                message: "Niche ID is required!" 
            });
        }

        const niche = await Niche.findByPk(n_id); // ✅ More optimized query

        if (!niche) {
            return res.status(404).json({
                success: false,
                message: `No niche found with ID: ${n_id}`,
            });
        }

        res.status(200).json({
            success: true,
            result: niche,
            message: `Here is the niche data for ID: ${n_id}`,
        });
    } catch (err) {
        console.error(`Error fetching niche data for ID ${req.params.n_id}:`, err);
        res.status(500).json({
            success: false,
            message: `Failed to fetch niche data for ID: ${req.params.n_id}`,
            error: err.message,
        });
    }
}

export { get_all_niche, get_one_niche_data };
