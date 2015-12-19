---
layout: post
title:  Transférer des photos sans fil avec le Sony a7r
description:  Transférer des photos sans fil avec le Sony a7r ou autre appareil Sony sous Mac OS El Captain.
tags: photo,app,sony
author: iSebmo
#date: 2015-12-19
fimg: 2015/12/export.jpg
---

Si vous aviez envisagé d'acheter une carte wifi [Eyefi][Eyefi] pour transférer vos photos de votre appareil vers votre ordinateur sachez que la série a7 de Sony le gère. 
Pour que ça fonctionne il faut installer un utilitaire officiel mais buggé sous OS X el captain, d'où cet article. Si au moment de cliquer sur "Définir" il ne se passe rien voilà comment procéder: 

![import](/images/2015/12/installation-import.gif)

Pré-requis:
1. Installer le driver pour votre appareil photo, voici le [lien][driver] pour le Sony a7 
2. Commencez par télécharger l'utilitaire [ici][utilitaire]
2. Installez le en suivant les instructions 
3. Ne le lancez pas immédiatement 

1. Dans votre dossier applications recherchez le logiciel "*Importation auto sans fil*"
2. Faites un clic droit dessus et ouvrez le paquet
3. Déplacer le fichier *Contents/PlugIns/WirelessImporterPTPRegistration* dans votre dossier Applications
4. Lancez le logiciel "*Importation auto sans fil*"
5. Cliquer sur "*Définir*"
6. Entrez le mot de passe administrateur
7. Double cliquer sur *WirelessImporterPTPRegistration* que vous avez copié
8. Entrez le mot de passe administrateur à nouveau

A présent la configuration a dû bien se passer, vous êtes prêts à envoyer des photos de votre Sony vers votre Mac.



[utilitaire]: http://support.d-imaging.sony.co.jp/imsoft/Mac/wai/fr.html
[driver]: http://esupport.sony.com/US/p/swu-download.pl?mdl=ILCE7&upd_id=10143&os_group_id=3
[Eyefi]: http://www.amazon.fr/Eyefi-Carte-Memoire-Gratuit-Cloud/dp/B00UADC43I/ref=sr_1_2?ie=UTF8&qid=1450536020&sr=8-2&keywords=eyefi&tag=tfadafr-21
