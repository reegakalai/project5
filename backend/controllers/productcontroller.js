

const productModel=require('../models/productModel');

//Get products api - /api/v1/products
exports.getProducts = async (req, res, next) => {
    try {
        // Build the query object
        const query = req.query.keyword
            ? {
                name: {
                    $regex: req.query.keyword,
                    $options: 'i', // Case-insensitive
                },
            }
            : {};

        // Pass the query directly to find()
        const products = await productModel.find(query);

        // Send the response
        res.json({
            success: true,
            products,
        });
    } catch (error) {
        // Handle errors
        next(error);
    }
};


//Get single products api - /api/v1/products/:id
exports.getSingleProduct = async (req,res,next)=>{

    try {
        const product=await productModel.findById(req.params.id);
        res.json({
            success:true,
            product
            
        })
        
    } catch (error) {
        res.status(404).json({
            success:false,
            // message:error.message
            message:'unable to get product with thatID'
        })
        
    }
    console.log(req.params.id,'ID')
   
}