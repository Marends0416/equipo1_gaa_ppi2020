
const { Router } = require('express');
const router = Router();
const fs = require('fs');


const rutinasFile = fs.readFileSync("./rutinas.json", "utf-8");
let rutinas = JSON.parse(rutinasFile);

router.get("/", (req, res) => {
    res.json("API-JSON-CRUD POLIJIC");
});
router.get("/rutinas", (req, res) => {
    res.status(200).json(rutinas);

});

router.post("/ejercicio", (req, res) => {
    const { titulo, tiempo, estimado, zona, ejercicio, video } = req.body;
    if (!titulo || !tiempo || !estimado || !zona || !ejercicio || !video) {
 
        res.status(4001).json({ error: "Debe completar todos los campos" });
        console.log("Debe completar todos los campos");
    } else {
      
        const id = rutinas.length + 1;
        let newrutinas = {
            id, titulo, tiempo, estimado, zona, ejercicio, video
        }

        rutinas.push(newrutinas);
        const json_rutinas = JSON.stringify(rutinas);
        fs.writeFileSync("./rutinas.json", json_rutinas, "utf-8");
        res.status(200).json(rutinas);
    }
}); 
router.put("/ejercicio/:id", (req, res) => {
    const { titulo, tiempo, estimado, zona, ejercicio, video } = req.body;
    const id = req.params.id;
    if (!titulo || !tiempo || !estimado || !zona || !ejercicio || !video || !id) {
        res.status(401).json({ error: " Debes completar todos los campos " });
    }
    else {
        rutinas.filter((rutinas) => {
            if (rutinas.id == id) { 
                rutinas.titulo = titulo;
                rutinas.tiempo = tiempo;
                rutinas.estimado = estimado;
                rutinas.zona = zona;
                rutinas.ejercicio = ejercicio;
                rutinas.video = video;
            }

        }); 
        const json_rutinas = JSON.stringify(rutinas);
        fs.writeFileSync("./rutinas.json", json_rutinas, "utf-8");
        res.status(200).json(rutinas);
    }
    });



    router.delete("/rutinas/:id", (req, res) => {
        const id = req.params.id;
    
        if (!id) {
            res
                .status(401)
                .json({ error: "Ingrese el código de la pelicula a eliminar" });
            } else {
                const indexrutinas = rutinas.findIndex((rutinas) => rutinas.id === id);
               
                rutinas.splice(indexrutinas, 1);
                const json_rutinas = JSON.stringify(rutinas);
                fs.writeFileSync("./rutinas.json", json_rutinas, "utf-8");
                res.status(200).json(rutinas);
            }
    
        
    
    
    
    
    }); 
    
    
    module.exports = router;