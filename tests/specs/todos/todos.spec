# Todos

* J'ouvre la page "Todos"

## Ajouter une todo

En tant qu'utilisateur, je veux ajouter une todo pour enrichir la liste.

* Je crée une todo "Manger"
* La todo "Manger" fait partie de la liste des todos

## Ajouter plusieurs todos

En tant qu'utilisateur, je veux ajouter plusieurs todos pour enrichir la liste.

* Je crée une todo "Manger"
* Je crée une todo "Boire"
* Il y a "2" todos dans la liste

## Valider une todo

En tant qu'utilisateur, je veux valider une todo pour la voir rayée dans la liste.

* Je crée une todo "Manger"
* Il y a "1" todos à valider
* Je clique sur la checkbox de la todo "Manger"
* Il y a "0" todos à valider

## Valider toutes les todos

En tant qu'utilisateur, je veux valider toutes les todos pour les voir rayées de la liste.

* Je crée une todo "Manger"
* Je crée une todo "Boire"
* Il y a "2" todos à valider
* Je clique sur la checkbox "toggle-all"
* Il y a "0" todos à valider

## Invalider toutes les todos

En tant qu'utilisateur, je veux invalider toutes les todos pour annuler mes actions.

* Je crée et valide une todo "Manger"
* Je crée et valide une todo "Boire"
* Il y a "0" todos à valider
* Je clique sur la checkbox "toggle-all"
* Il y a "2" todos à valider

## Voir les todos non validées

En tant qu'utilisateur, je veux voir uniquement les todos non validées pour me concentrer sur elles.

* Je crée et valide une todo "Manger"
* Je crée une todo "Boire"
* Je clique sur "Active"
* La todo "Boire" est la seule dans la liste

## Voir les todos validées

En tant qu'utilisateur, je veux voir uniquement les todos validées pour apprécier le travail accompli.
* Je crée et valide une todo "Manger"
* Je crée une todo "Boire"
* Je clique sur "Completed"
* La todo "Manger" est la seule dans la liste

## Supprimer une todo

En tant qu'utilisateur, je veux supprimer une todo pour qu'elle n'apparaisse plus dans la liste.

* Je crée une todo "Manger"
* Je clique sur le bouton supprimer de la todo "Manger"
* La todo "Manger" ne fait pas partie de la liste des todos

## Supprimer les todos validées

En tant qu'utilisateur, je veux supprimer les todos validées pour ne garder que les non validées.

* Je crée et valide une todo "Manger"
* Je crée une todo "Boire"
* Je clique sur "Clear completed"
* La todo "Boire" est la seule dans la liste

___

* Je vide mon local storage

## Récupérer mes todos

En tant qu'utilisateur, je souhaite récupérer mes todos au rechargement de la page pour retrouver mon travail.

* Je crée une todo "Manger"
* Je recharge la page
* La todo "Manger" fait partie de la liste des todos
