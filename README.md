# ApiMuscle

![Logo ApiMuscle](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Emoji_u1f4aa.svg/768px-Emoji_u1f4aa.svg.png)

## À propos du projet

Cette API a été conçue pour fournir un accès facile et structuré à une vaste collection d'exercices de musculation. Chaque exercice est classé et accessible via différents endpoints, permettant aux utilisateurs de rechercher et de récupérer des informations spécifiques selon leurs besoins.

## Fonctionnalités

- **Accès aux exercices par catégorie :** Les utilisateurs peuvent rechercher des exercices en fonction de la catégorie musculaire (par exemple, bras, jambes, dos).
- **Détails de l'exercice :** Chaque exercice comprend des informations détaillées telles que les instructions, les muscles ciblés, et des conseils pour une exécution correcte.
- **Filtrage et recherche :** Les utilisateurs peuvent filtrer les exercices en fonction de critères spécifiques, tels que le niveau de difficulté ou le type d'équipement nécessaire.

## Utilisation

Voici quelques exemples de requêtes que vous pouvez effectuer :

- **Obtenir tous les exercices :**
```GET /api/exercices```
- **Rechercher un exercice par nom :**
```GET /api/exercices?nom=[Nom de l'exercice]```
- **Filtrer les exercices par catégorie :**
```GET /api/exercices/categorie/[Nom de la catégorie]```

## Licence

Distribué sous la Licence MIT. Voir `LICENSE` pour plus d'informations.

