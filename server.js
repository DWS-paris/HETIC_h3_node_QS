/*
Importer les composants serveur
*/
    // Composants
    const express = require('express');
    const path = require('path');
    const ejs = require('ejs');

    // Modules
    const frontRoute = require('./routes/front');
    const apiRoute = require('./routes/api');
//


/*
Configurer le serveur
*/
    // Création des variable serveur
    const app = express();
    const port = process.env.PORT || 3000;

    // Définition de l'adresse du dossier statique du client
    app.set( 'views', __dirname + '/www' );
    app.use( express.static(path.join(__dirname, 'www')) );

    // Définition du moteur de rendu
    app.engine( 'html', ejs.renderFile );
    app.set( 'view engine', 'html' );

    // Définition des routes
    app.use('/', frontRoute);
    app.use('/api', apiRoute);
//


/*
Lancer le serveur
*/
    app.listen(port, () => console.log(`Le serveur est lancé sur le port ${port}`));
//