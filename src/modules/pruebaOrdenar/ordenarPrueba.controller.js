const {Router}=require('express');
const ordenarTd=require('./ordenarPrueba.service');

const router=Router();

router.get('/',async (req,res)=>{
    try {
        const ordenados=await ordenarTd.ordenarTodo(req.query);
        res.json(ordenados);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error al obtener los datos'});
    }
});

module.exports = router;