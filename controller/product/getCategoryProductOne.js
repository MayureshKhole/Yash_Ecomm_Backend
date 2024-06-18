const productModel = require("../../models/productModels")


const getCategoryProductOne = async(req,res)=>{
    try{
        const productCategory = await productModel.distinct("category")

        console.log("category",productCategory)

        //array to store one product from each category
        const productByCategory = []

        for(const category of productCategory){
            console.log(category);
            const product = await productModel.findOne({category })
            console.log("Product ------------\n",product);

            if(product){
                productByCategory.push(product)
            }
        }

        res.json({
            message : "category product",
            data : productByCategory,
            success : true,
            error : false
        })


    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = getCategoryProductOne