---
title: Migration du blog sous Jekyll
author: iSebmo
layout: post
categories:
  - Geek
fimg: 2015/09/migration.jpg
---
C'est fait, la *migration* du site est enfin terminée ! Cela faisait plus d'un an que ce site était hébergé par [OVH][ovh]. Je ne recommanderai cet hébergeur à personne. J'ai commencé avec leur offre *premier prix* en pensant que pour un trafic de blog ce serait suffisant et bien *non*. J'ai ensuite prix la formule au-dessus, à 90€ par an, et c'est loin d'être la panacée...

Du coup je me suis mis à la recherche d'un hébergeur pas *trop cher* et plus **performant**. J'ai d'abord envisagé une refonte du site avec Wordpress et AngularJS le tout hébergé chez [Gandi][Gandi] puis je me suis ravisé, car PHP n'est vraiment pas mon *langage préféré*. 
J'ai hésité ensuite avec la mise en place d'un blog avec du **NodeJS** côté serveur, mais pour faire un simple blog c'était un peu *bourrin*. 

# Générateur de sites statiques
Et puis en faisant quelques recherches sur le net je suis tombé sur les générateurs de **sites statiques**. Bingo ! C'est exactement ce que je voulais, mais sans le savoir. 

Un site statique c'est un site à *l'inverse* du [web 2.0][w2], c'est-à-dire que vous vous retrouvez avec de *simples* pages HTML et aucun moyen d'interagir avec le serveur. Vous ne pouvez rien envoyer au serveur depuis le client (exit donc le nombre de vues d'un article).

Ce type de sites n'est pas faits pour tout le monde. Personnellement c'est ce que je recherche, car ça limite les risques **d'attaques** (comme j'ai pu en faire les frais). Et ça vous permet de vous concentrer sur le contenu plutôt que la *maintenance* du site. 

# Jekyll 
Mon choix s'est porté  sur le générateur [Jekyll][jekyll]. C'est le plus connu dans sa catégorie, il est *simple*, plutôt *modulable* et surtout compatible avec [github-pages][gpages]. Qui dit compatible avec ce service dit hébergement **gratuit** (dans le cadre d'une utilisation *Open Source*). Le fonctionnement est on ne peut plus simple vous déployez vos sources sur [github][github], vous écrivez un article en [markdown][md] de préférence, vous le [pushez][pusher] et le tour est joué ! Votre article est alors en ligne *automatiquement* !

Cette **facilité** permet de pouvoir bloguer depuis un simple appareil iOS à coup de [Éditorial][edit] ou [Byword][bw], et grâce à [Working copy][wc] vous pouvez pusher vos images et articles sur github... Que demande le peuple. Pour les *Warriors* vous pouvez donc *modifier* l'apparence de votre site directement depuis vous *téléphone* portable. 

# Maîtrise totale
Ce qui m'a incité à changer de [CSM][CMS], c'est la possibilité de pouvoir *tout gérer* sur le site. Ici pas de PHP, seulement du HTML 5, CSS 3 et du JavaScript (pour le plaisir). 
Je me suis donc lancé dans l'élaboration d'un *thème* plutôt que d'en récupérer un. Je trouve vraiment sympa de pouvoir se faire un thème comme on veut. Seule notre *imagination* est notre limite. Il est en amélioration permanente, il manque encore pas mal de fonctionnalités du coup j'ai préféré mettre le fanion "bêta" en haut à droite du site. 

J'espère que cette version vous plaira, et j'essaierai de vous faire des tutoriels dans la partie "informatique" de ce site, en espérant vous avoir donné envie de créer votre propre espace d'expression (non censuré). 

Lien vers la photo à la une [ici](https://flic.kr/p/98A41i).

[ovh]: http://ovh.com
[Gandi]: https://www.gandi.net/?lang=fr
[CMS]: https://fr.wikipedia.org/wiki/SystC3%A8me_de_gestion_de_contenu
[bw]: https://geo.itunes.apple.com/fr/app/byword/id482063361?mt=8&at=1l3vs3Y
[wc]: https://geo.itunes.apple.com/fr/app/working-copy/id896694807?mt=8&at=1l3vs3Y
[edit]: https://geo.itunes.apple.com/fr/app/editorial/id673907758?mt=8&at=1l3vs3Y
[github]: http://github.com
[md]: https://fr.wikipedia.org/wiki/Markdown
[gpages]: https://pages.github.com/
[jekyll]: http://jekyllrb.com/
[w2]: https://fr.wikipedia.org/wiki/Web_2.0
[pusher]: http://git-scm.com/docs/git-push