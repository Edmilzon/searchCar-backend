const {Router}=require('express');
const hostService=require('./detailHost.service')
const router=Router();

router.get('/:id',async(req,res)=>{
    const hostId=parseInt(req.params.id);
    console.log('Id recibido',hostId);
    try{
        const host=await hostService.findById(hostId);
        if(!host){
            console.log('Host no encontrado')
            return res.status(404).json({ message: "No existe el Host" });
        }
        res.json(host);
        //console.log(host);
    }catch(error){
        console.log(error)
    }
})

module.exports = router;
