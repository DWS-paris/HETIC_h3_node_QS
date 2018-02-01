/*
Importer les composant du module de route
*/
    const express = require('express');
    const router = express.Router();

    // Importer Mongoose
    const mongoose = require('mongoose');
    // Définir l'adressez de la BDD
    const mongodbUrl = 'mongodb://localhost:27019/blog';
//


/*
Définition des routes front
*/ 
    router.get('/', (req, res) => {
        // Renvoyer un flux JSON dans la réponse
        res.json( { content: 'Hello API' } );
    });


    router.get('/posts/', (req, res) => {

        // Connexion à la base de données MongoDb
        mongoose.connect(mongodbUrl, (err, db) =>{

            // Tester la connexion
            if(err){ res.send(err) } 
            else {
    
                // Récupération des documents de la collection 'posts' => find
                db.collection('posts').find().toArray((err, posts) => {
    
                    // Tester la commande MongoDb
                    if(err){ res.send(err) }
    
                    else{ 
                        // Envoyer les données au format json
                        res.json(posts)
                    };
                });
            };
    
            // Fermer la connexion à la base MongoDb
            db.close();
        });
    });
//


/*
Expoter le module de route
*/
    module.exports = router;
//