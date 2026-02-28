# Module Projet - Documentation

## Aperçu

Le module Projet permet aux utilisateurs de gérer le budget de leurs projets. Il offre les fonctionnalités suivantes:

1. **Création et gestion de projets** avec un budget initial
2. **CRUD sur les transactions d'estimations** dans un projet
3. **Possibilité d'ajouter des coûts réels** pour chaque transaction
4. **Écran de statistiques** pour visualiser un projet avec les différents coûts
5. **Génération de PDF** (factures, statistiques) avec possibilité de téléchargement

## Structure des données

### Modèles Prisma

#### Project

```
- id: String (UUID)
- name: String (Unique par account)
- description: String? (Optionnel)
- initialBudget: Int (Budget initial en FCFA)
- createdAt: DateTime
- updatedAt: DateTime
- isArchived: Boolean (default: false)
- color: String (Couleur hex, default: #00ff00)
- iconRef: String? (Référence à une icône)
- accountId: String (FK vers Account)
- projectTransactions: ProjectTransaction[] (Relations)
```

#### ProjectTransaction

```
- id: String (UUID)
- name: String
- description: String? (Optionnel)
- estimatedCost: Int (Coût estimé en FCFA)
- realCost: Int? (Coût réel, default: 0)
- createdAt: DateTime
- updatedAt: DateTime
- projectId: String (FK vers Project)
- accountId: String
```

## API Endpoints

### Gestion des Projets

#### Créer un projet

**POST** `/account/:accountId/project`

```json
{
  "name": "Renovation Maison",
  "description": "Renovation complète de la maison",
  "initialBudget": 5000000,
  "color": "#FF5733",
  "iconRef": "building"
}
```

**Réponse (200)**:

```json
{
  "id": "uuid",
  "name": "Renovation Maison",
  "description": "Renovation complète de la maison",
  "initialBudget": 5000000,
  "createdAt": "2026-02-23T10:00:00Z",
  "updatedAt": "2026-02-23T10:00:00Z",
  "isArchived": false,
  "color": "#FF5733",
  "iconRef": "building",
  "accountId": "uuid"
}
```

#### Lister tous les projets

**GET** `/account/:accountId/project?page=1&pageSize=10&name=Renovation&isArchived=false`

**Paramètres de requête**:

- `page`: Number (Page actuelle, default: 1)
- `pageSize`: Number (Nombre d'éléments par page, default: 10)
- `name`: String? (Filtre par nom)
- `isArchived`: Boolean? (Filtre par status archivé, default: false)

**Réponse (200)**: Array de Projects

#### Obtenir un projet spécifique

**GET** `/account/:accountId/project/:projectId`

**Réponse (200)**: Objet Project

#### Mettre à jour un projet

**PUT** `/account/:accountId/project/:projectId`

```json
{
  "name": "Renovation Maison 2",
  "description": "Renovation avec modernisation",
  "initialBudget": 6000000,
  "color": "#FF5733"
}
```

**Réponse (200)**: Objet Project mis à jour

#### Archiver un projet

**POST** `/account/:accountId/project/:projectId/archive`

**Réponse (200)**: Objet Project archivé

#### Supprimer un projet

**DELETE** `/account/:accountId/project/:projectId`

**Réponse (200)**: Objet Project supprimé

---

### Gestion des Transactions de Projet

#### Créer une transaction de projet

**POST** `/account/:accountId/project/:projectId/transaction`

```json
{
  "name": "Achat Matériaux",
  "description": "Ciment, sable, briques",
  "estimatedCost": 500000,
  "realCost": 520000
}
```

**Réponse (200)**: Objet ProjectTransaction

#### Lister les transactions d'un projet

**GET** `/account/:accountId/project/:projectId/transaction`

**Réponse (200)**: Array de ProjectTransaction

#### Obtenir une transaction spécifique

**GET** `/account/:accountId/project/:projectId/transaction/:transactionId`

**Réponse (200)**: Objet ProjectTransaction

#### Mettre à jour une transaction

**PUT** `/account/:accountId/project/:projectId/transaction/:transactionId`

```json
{
  "name": "Achat Matériaux Supplémentaires",
  "description": "Additional materials",
  "estimatedCost": 600000,
  "realCost": 620000
}
```

**Réponse (200)**: Objet ProjectTransaction mis à jour

#### Supprimer une transaction

**DELETE** `/account/:accountId/project/:projectId/transaction/:transactionId`

**Réponse (200)**: Objet ProjectTransaction supprimé

---

### Statistiques et Rapports

#### Obtenir les statistiques du projet

**GET** `/account/:accountId/project/:projectId/statistics`

**Réponse (200)**:

```json
{
  "project": {
    "id": "uuid",
    "name": "Renovation Maison",
    "initialBudget": 5000000,
    ...
  },
  "totalEstimatedCost": 1500000,
  "totalRealCost": 1550000,
  "remainingBudget": 3450000,
  "transactionCount": 5
}
```

#### Télécharger PDF Statistiques

**GET** `/account/:accountId/project/:projectId/pdf/statistics`

Génère un PDF avec:

- Informations du projet
- Statistiques budgétaires
- Pourcentage d'utilisation du budget
- Date de génération

**Réponse** (200): PDF File

#### Télécharger PDF Facture

**GET** `/account/:accountId/project/:projectId/pdf/invoice`

Génère un PDF avec:

- Tableau détaillé de toutes les transactions
- Coûts estimés vs réels
- Résumé budgétaire

**Réponse** (200): PDF File

#### Télécharger PDF Résumé

**GET** `/account/:accountId/project/:projectId/pdf/summary`

Génère un PDF avec:

- Résumé visuel du budget
- Barre de progression d'utilisation
- Informations clés du projet

**Réponse** (200): PDF File

---

## Exemples d'utilisation

### Exemple 1: Créer un projet et gérer ses transactions

```bash
# 1. Créer le projet
curl -X POST http://localhost:8080/account/123/project \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Renovation Maison",
    "initialBudget": 5000000,
    "description": "Renovation de la cuisine"
  }'

# 2. Ajouter des transactions
curl -X POST http://localhost:8080/account/123/project/456/transaction \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Achat Portes",
    "estimatedCost": 800000,
    "realCost": 850000,
    "description": "3 portes en bois"
  }'

# 3. Obtenir les statistiques
curl -X GET http://localhost:8080/account/123/project/456/statistics \
  -H "Authorization: Bearer $TOKEN"

# 4. Télécharger le PDF
curl -X GET http://localhost:8080/account/123/project/456/pdf/invoice \
  -H "Authorization: Bearer $TOKEN" \
  --output facture.pdf
```

### Exemple 2: Gérer les coûts réels au fur et à mesure

```bash
# Créer transaction avec coût estimé seulement
curl -X POST http://localhost:8080/account/123/project/456/transaction \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Plomberie",
    "estimatedCost": 1000000,
    "description": "Installation tuyauterie"
  }'

# Plus tard, mettre à jour avec coût réel
curl -X PUT http://localhost:8080/account/123/project/456/transaction/789/realCost \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "realCost": 1100000
  }'
```

---

## Validation

### ProjectValidator

- **name**: Chaîne non vide
- **initialBudget**: Nombre positif
- **estimatedCost**: Nombre positif
- **realCost**: Nombre >= 0

---

## Gestion d'erreurs

- `400 Bad Request`: Données invalides
- `403 Forbidden`: Accès non autorisé au projet (accountId mismatch)
- `404 Not Found`: Projet ou transaction non trouvée

---

## Cas d'utilisation

### 1. Estimation de budget d'un projet

Créer un projet avec un budget initial, ajouter toutes les transactions avec coûts estimés, et suivre via les statistiques.

### 2. Suivi des dépenses réelles

Ajouter progressivement les coûts réels à mesure que le projet progresse et comparer avec les estimations.

### 3. Génération de rapports

Générer des PDF statistiques et factures à partager avec les parties prenantes.

### 4. Archivage de projets terminés

Archiver les projets complétés pour libre espace de travail.

---

## Améliorations possibles

1. **Export des données** (CSV, Excel)
2. **Partage de projets** avec d'autres utilisateurs
3. **Notifications** quand le budget est dépassé
4. **Historique des modifications** (audit trail)
5. **Catégorisation des transactions** (matériaux, main d'œuvre, etc.)
6. **Comparaison de projets** multiples
7. **Pièces jointes** (factures, devis)
8. **Signature numérique** des PDF
