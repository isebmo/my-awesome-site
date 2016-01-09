---
layout: post
title: Convertir des mangas pour Kindle sur Mac
description: Comment convertir vos mangas pour Kindle ou au format ePub ? Voici la procédure à suivre.
tags: app,liseuse,livre,kindle
author: iSebmo
#date: 2016-01-08
fimg: 2016/01/manga.jpg
---

Les liseuses se prêtent très bien à la lecture de mangas, leur encre électronique noir et blanc les restitue à merveille. Alors si vous avez scanné vos mangas papier dans l'espoir de les lire sur votre liseuse [préférée][Kindle Voyage] voici la procédure à effectuer pour les possesseurs d'un Mac.

1. D'abord rendez-vous sur ce [site][site] pour télécharger le logiciel [Kindle Comic Converter][Kindle Comic Converter]
2. Installez-le dans votre dossier Applications

![Kindle Comic Converter](/images/2016/01/app.png)

3. Lancer le terminal
4. Tapez les commandes suivantes (cela va installer un gestionnaire de paquets Homebrew et un logiciel d'encodage d'ebook vers mobi):

```
 installation homebrew  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
```
 brew cask install kindlegen
```

5. À présent il vous suffit d'ouvrir l'application [Kindle Comic Converter][Kindle Comic Converter] et faites y glisser votre manga (ou dossier d'images), vous avez la possibilité de choisir le format et surtout la liseuse cible (par exemple [Kindle Voyage][Kindle Voyage])

![kcc](/images/2016/01/kcc.png)

6. Une fois que le logiciel [Kindle Comic Converter][Kindle Comic Converter] vous a converti votre manga préféré, utilisez Calibre pour le transférer, car le poids risque d'être trop important pour l'envoyer vers le Kindle par mail... 

[site]: https://github.com/ciromattia/kcc
[Kindle Comic Converter]: http://kcc.iosphe.re/OSX/
[Kindle Voyage]: http://tfada.fr/kindle-voyage.html