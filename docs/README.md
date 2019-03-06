# API Documentation

**Base URL:**
https://www.bungie.net/Platform/Destiny2

---

## **getUserId**
Get Basic information for user.

**URL:** /SearchDestinyPlayer/{membershipType}/{displayName}

**Path Params**:
-  displayName, e.g. DeafSlifer
-  membershipType: 1 (xbox) 2 (psn) 4 (pc)

---

## **getProfile (for ID)**

Get basic information for profile, characters and progression.

**URL:** {membershipType}/Profile/{destinyMembershipId}

**Path Params**:
-  destinyMembershipId: gained from Get User ID
-  membershipType: 1 (xbox) 2 (psn) 4 (pc)

**Query Params:**
- Components
  - 100 for Basic Information
  - 202 for Progression with **2772425241** used for Gambit


## **getStats (for ID)**

Get stats for User.

**URL:** {membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/

**Path Params**:
-  destinyMembershipId: gained from Get User ID
-  characterId: gained from getProfile, but pass as 0 to get aggregated stats for them all.
-  membershipType: 1 (xbox) 2 (psn) 4 (pc)

**Query Params:**
- modes: 63 (gambit specific)


