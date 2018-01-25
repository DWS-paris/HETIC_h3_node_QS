/*
Importer les composant du module de route
*/
const express = require('express');
const router = express.Router();
//

/*
Définition des routes front
*/
router.get('/', (req, res) => {
    // Renvoyer le fichier 'index' dans la réponse
    res.json({msg: 'Hello API'});
});
//


/*
Expoter le module de route
*/
module.exports = router;
//