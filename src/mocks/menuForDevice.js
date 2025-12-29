const menuForDevice = {
  "id": "33333333-4444-5555-6666-777788889999",
  "name": "All Day Menu",
  "title": "Coffee & Quick Bites",
  "description": "Our coffee bar and pastries available all day",
  "referenceId": "MENU-ALLDAY",
  "tenantId": "A1B2C3D4-E5F6-7890-ABCD-EF1234567890",
  "enabled": true,
  "storeId": "B1C2D3E4-F5A6-7890-BCDE-F12345678901",
  "storeName": "Downtown Location",
  "storeCode": "STORE-001",
  "schedule": {
    "id": "F1A2B3C4-D5E6-7890-F123-456789012345",
    "name": "All Day Schedule",
    "description": "Available throughout operating hours",
    "timeChunks": [
      { "id": "352AEEFC-A388-4631-ACBD-30E5859EAB23", "dayOfWeek": 0, "startTime": "06:00:00", "endTime": "22:00:00" },
      { "id": "E61CECA8-2A84-490B-98CC-6B97E0847281", "dayOfWeek": 1, "startTime": "06:00:00", "endTime": "22:00:00" },
      { "id": "33F05494-1D2A-41A5-8764-45363E3529C6", "dayOfWeek": 2, "startTime": "06:00:00", "endTime": "22:00:00" },
      { "id": "1AB01F3D-30EA-43C6-9988-D21FCCFBA6D3", "dayOfWeek": 3, "startTime": "06:00:00", "endTime": "22:00:00" },
      { "id": "05FDB99F-B709-4B39-8C7C-6C164DEF12BA", "dayOfWeek": 4, "startTime": "06:00:00", "endTime": "22:00:00" },
      { "id": "E67B8E6B-1E92-427D-8523-9EC13420E393", "dayOfWeek": 5, "startTime": "06:00:00", "endTime": "22:00:00" },
      { "id": "671C097D-1356-48D4-B778-1A7DC4CE01EB", "dayOfWeek": 6, "startTime": "06:00:00", "endTime": "22:00:00" }
    ],
    "specialChunks": []
  },
  "menuCategories": [
    {
      "categoryId": "CA755555-5555-5555-5555-555555555555",
      "scheduleId": null,
      "index": 2,
      "enabled": true,
      "categoryName": "Pastries & Desserts",
      "categoryTitle": "Sweet Treats",
      "categoryDescription": "Freshly baked pastries and desserts daily",
      "categoryImage": "img-pastry-category.jpg",
      "media": [],
      "schedule": null,
      "products": [
        {
          "productId": "B40D5555-1111-1111-1111-111111111111",
          "index": 1,
          "enabled": true,
          "name": "Butter Croissant",
          "title": "French Butter Croissant",
          "description": "Flaky, buttery croissant baked fresh daily",
          "referenceId": "B40D-PST-001",
          "disclaimer": null,
          "available": true,
          "ageRestricted": false,
          "image": "img-croissant.jpg",
          "banner": "banner-croissant.jpg",
          "sku": "SKU-PST-001",
          "dexSku": null,
          "media": [
            {
              "url": "https://selforder.nyc3.cdn.digitaloceanspaces.com/A1B2C3D4-E5F6-7890-ABCD-EF1234567890/media/butter-croissant_996ddb0ea3.jpg",
              "alternativeText": "Image test",
              "width": 225,
              "height": 225,
              "mime": "image/jpeg",
              "formats": {},
              "size": 9.15,
              "ext": ".jpg",
              "name": "butter-croissant.jpg"
            }
          ],
          "price": 3.5,
          "isAvailable": true,
          "availabilitySource": "GLOBAL_DEFAULT",
          "modifierGroups": []
        },
        {
          "productId": "B40D5555-4444-4444-4444-444444444444",
          "index": 4,
          "enabled": true,
          "name": "Fudge Brownie",
          "title": "Double Chocolate Fudge Brownie",
          "description": "Rich, decadent brownie with chocolate ganache",
          "referenceId": "B40D-PST-004",
          "disclaimer": null,
          "available": true,
          "ageRestricted": false,
          "image": "img-brownie.jpg",
          "banner": "banner-brownie.jpg",
          "sku": "SKU-PST-004",
          "dexSku": null,
          "media": [
            {
              "url": "https://selforder.nyc3.cdn.digitaloceanspaces.com/A1B2C3D4-E5F6-7890-ABCD-EF1234567890/media/triple-fudge-brownies-5_2504c59fac.jpg",
              "alternativeText": "Image test",
              "width": 660,
              "height": 880,
              "mime": "image/jpeg",
              "formats": {
                "thumbnail": {
                  "width": 234,
                  "height": 156,
                  "url": "https://selforder.nyc3.cdn.digitaloceanspaces.com/A1B2C3D4-E5F6-7890-ABCD-EF1234567890/media/triple-fudge-brownies-5_2504c59fac_thumbnail.jpg",
                  "size": 10.48
                },
                "small": {
                  "width": 500,
                  "height": 333,
                  "url": "https://selforder.nyc3.cdn.digitaloceanspaces.com/A1B2C3D4-E5F6-7890-ABCD-EF1234567890/media/triple-fudge-brownies-5_2504c59fac_small.jpg",
                  "size": 38.62
                }
              },
              "size": 82.32,
              "ext": ".jpg",
              "name": "triple-fudge-brownies-5.jpg"
            }
          ],
          "price": 3.95,
          "isAvailable": true,
          "availabilitySource": "GLOBAL_DEFAULT",
          "modifierGroups": []
        }
      ]
    },
    {
      "categoryId": "CA766666-6666-6666-6666-666666666666",
      "scheduleId": null,
      "index": 3,
      "enabled": true,
      "categoryName": "Beverages",
      "categoryTitle": "Cold & Hot Beverages",
      "categoryDescription": "Refreshing drinks for any time of day",
      "categoryImage": "img-beverage-category.jpg",
      "media": [],
      "schedule": null,
      "products": [
        {
          "productId": "B40D6666-2222-2222-2222-222222222222",
          "index": 1,
          "enabled": true,
          "name": "Iced Tea",
          "title": "House Iced Tea",
          "description": "Refreshing iced tea, sweetened or unsweetened",
          "referenceId": "B40D-BEV-002",
          "disclaimer": null,
          "available": true,
          "ageRestricted": false,
          "image": "img-iced-tea.jpg",
          "banner": "banner-iced-tea.jpg",
          "sku": "SKU-BEV-002",
          "dexSku": null,
          "media": [
            {
              "url": "https://selforder.nyc3.cdn.digitaloceanspaces.com/A1B2C3D4-E5F6-7890-ABCD-EF1234567890/media/iced%20tea_2ac18f8168.jpg",
              "alternativeText": "Image testa",
              "width": 1400,
              "height": 919,
              "mime": "image/jpeg",
              "formats": {
                "thumbnail": {
                  "width": 234,
                  "height": 156,
                  "url": "https://selforder.nyc3.cdn.digitaloceanspaces.com/A1B2C3D4-E5F6-7890-ABCD-EF1234567890/media/iced%20tea_2ac18f8168_thumbnail.jpg",
                  "size": 10
                },
                "small": {
                  "width": 500,
                  "height": 333,
                  "url": "https://selforder.nyc3.cdn.digitaloceanspaces.com/A1B2C3D4-E5F6-7890-ABCD-EF1234567890/media/iced%20tea_2ac18f8168_small.jpg",
                  "size": 33.1
                },
                "medium": {
                  "width": 750,
                  "height": 500,
                  "url": "https://selforder.nyc3.cdn.digitaloceanspaces.com/A1B2C3D4-E5F6-7890-ABCD-EF1234567890/media/iced%20tea_2ac18f8168_medium.jpg",
                  "size": 68.73
                }
              },
              "size": 263.94,
              "ext": ".jpg",
              "name": "iced tea.jpg"
            }
          ],
          "price": 2.95,
          "isAvailable": true,
          "availabilitySource": "GLOBAL_DEFAULT",
          "modifierGroups": []
        }
      ]
    }
  ]
}
export default menuForDevice

