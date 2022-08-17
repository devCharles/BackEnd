const {getRecipeMaterials, createRecipeMaterials, updateRecipeMaterials, deleteRecipeMaterials} = require("../usecases/recipe-materials.usecase")
const express = require("express")
const router = express.Router()

router.get("/", async (request, response) => {
    try{
        const recipeMaterials = await getRecipeMaterials()
        response.json({
            success:true,
            data: {
                clients
            }
        })
    } catch (err) {
        response.status(err.status || 500)
        response.json({
            success:false,
            message: err.message
        })
    }
})

router.post("/create", async(request, response) =>{
    try{
        const recipe = await createRecipeMaterials()
        response.json({
            success:true,
            data:{
                recipeMaterials
            }
        })


    }catch(err){
        response.status(err.status || 500)
        response.json({
            succes:false,
            message: err.message
        })
    }

})

router.patch("/update/:id", async (request, response)=>{
    try{
        const recipeMaterials = await updateRecipeMaterials(id, request.body)
        response.json({
            success:true,
            data:{
                recipeMaterials
            }
        })
    }catch(err){
        response.status(err.status || 400)
        response.json({
            success : false,
            message: err.message
        })
    }
})

router.delete("/:id", async(request, response)=>{
    const {id} = request.params
    try{
        const recipe = await deleteRecipeMaterials(id)
        response.status(200)
        response.json({
            success:true,
            message: "Se ha eliminado el material"
        })
    }catch(err){
        response.status(error.status || 500)
        response.json({
            success : false,
            message: error.message
        })
    }
})