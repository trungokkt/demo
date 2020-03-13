'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      let data=[{
        "name": "Mustard - Dijon",
        "price": 68,
        "imagepath": "http://dummyimage.com/300x300.bmp/dddddd/000000",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/ff4444/ffffff",
        "availability": true,
        "description": "Other central nervous system complications of anesthesia during pregnancy, third trimester"
      }, {
        "name": "Oven Mitt - 13 Inch",
        "price": 55,
        "imagepath": "http://dummyimage.com/300x300.jpg/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "availability": false,
        "description": "Other private fixed-wing aircraft explosion injuring occupant, initial encounter"
      }, {
        "name": "Everfresh Products",
        "price": 30,
        "imagepath": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/ff4444/ffffff",
        "availability": true,
        "description": "Unspecified subluxation of left wrist and hand, subsequent encounter"
      }, {
        "name": "Irish Cream - Butterscotch",
        "price": 46,
        "imagepath": "http://dummyimage.com/300x300.png/dddddd/000000",
        "thumnailpath": "http://dummyimage.com/300x300.png/dddddd/000000",
        "availability": false,
        "description": "Pedestrian on foot injured in collision with car, pick-up truck or van in nontraffic accident, sequela"
      }, {
        "name": "Soup Campbells Mexicali Tortilla",
        "price": 43,
        "imagepath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/dddddd/000000",
        "availability": false,
        "description": "Periprosthetic fracture around internal prosthetic right ankle joint, sequela"
      }, {
        "name": "Wine - Delicato Merlot",
        "price": 66,
        "imagepath": "http://dummyimage.com/300x300.bmp/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/5fa2dd/ffffff",
        "availability": false,
        "description": "Nondisplaced fracture of body of unspecified talus"
      }, {
        "name": "Onions - Pearl",
        "price": 66,
        "imagepath": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/ff4444/ffffff",
        "availability": true,
        "description": "Bed confinement status"
      }, {
        "name": "Mustard - Seed",
        "price": 37,
        "imagepath": "http://dummyimage.com/300x300.png/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/cc0000/ffffff",
        "availability": true,
        "description": "Other instability, right ankle"
      }, {
        "name": "Milk - Chocolate 500ml",
        "price": 70,
        "imagepath": "http://dummyimage.com/300x300.bmp/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/dddddd/000000",
        "availability": false,
        "description": "Laceration of muscle(s) and tendon(s) of the rotator cuff of unspecified shoulder, sequela"
      }, {
        "name": "Ocean Spray - Kiwi Strawberry",
        "price": 80,
        "imagepath": "http://dummyimage.com/300x300.png/dddddd/000000",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/cc0000/ffffff",
        "availability": false,
        "description": "Neoplasm of uncertain behavior of left adrenal gland"
      }, {
        "name": "Basil - Pesto Sauce",
        "price": 86,
        "imagepath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
        "availability": false,
        "description": "Passenger in heavy transport vehicle injured in collision with pedestrian or animal in nontraffic accident, subsequent encounter"
      }, {
        "name": "Tomato - Peeled Italian Canned",
        "price": 6,
        "imagepath": "http://dummyimage.com/300x300.bmp/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "availability": true,
        "description": "Diffuse traumatic brain injury with loss of consciousness of any duration with death due to other cause prior to regaining consciousness, initial encounter"
      }, {
        "name": "Cheese - Shred Cheddar / Mozza",
        "price": 31,
        "imagepath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "availability": true,
        "description": "Vulvar vestibulitis"
      }, {
        "name": "Green Scrubbie Pad H.duty",
        "price": 52,
        "imagepath": "http://dummyimage.com/300x300.bmp/dddddd/000000",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff",
        "availability": false,
        "description": "Other specified injuries of thorax"
      }, {
        "name": "Cheese - Romano, Grated",
        "price": 96,
        "imagepath": "http://dummyimage.com/300x300.jpg/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/dddddd/000000",
        "availability": false,
        "description": "Other secondary chronic gout, right hand"
      }, {
        "name": "Rice Paper",
        "price": 44,
        "imagepath": "http://dummyimage.com/300x300.jpg/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "availability": true,
        "description": "Displaced fracture of base of neck of left femur"
      }, {
        "name": "Syrup - Monin, Irish Cream",
        "price": 36,
        "imagepath": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/ff4444/ffffff",
        "availability": false,
        "description": "Other nutritional anemias"
      }, {
        "name": "Creme De Menthe Green",
        "price": 29,
        "imagepath": "http://dummyimage.com/300x300.jpg/dddddd/000000",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/cc0000/ffffff",
        "availability": true,
        "description": "External constriction of right forearm"
      }, {
        "name": "Muffin Batt - Blueberry Passion",
        "price": 84,
        "imagepath": "http://dummyimage.com/300x300.bmp/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
        "availability": false,
        "description": "Crushing injury of unspecified thumb, sequela"
      }, {
        "name": "Ecolab Crystal Fusion",
        "price": 94,
        "imagepath": "http://dummyimage.com/300x300.jpg/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/cc0000/ffffff",
        "availability": false,
        "description": "Mechanical loosening of internal right hip prosthetic joint, subsequent encounter"
      }, {
        "name": "Pickles - Gherkins",
        "price": 41,
        "imagepath": "http://dummyimage.com/300x300.jpg/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/ff4444/ffffff",
        "availability": false,
        "description": "Nondisplaced fracture of shaft of right clavicle, subsequent encounter for fracture with routine healing"
      }, {
        "name": "Wine - Dubouef Macon - Villages",
        "price": 40,
        "imagepath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/cc0000/ffffff",
        "availability": true,
        "description": "Unspecified fracture of third metacarpal bone, right hand, subsequent encounter for fracture with routine healing"
      }, {
        "name": "Muffin - Zero Transfat",
        "price": 45,
        "imagepath": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/ff4444/ffffff",
        "availability": true,
        "description": "Obstetric hematoma of pelvis"
      }, {
        "name": "Devonshire Cream",
        "price": 19,
        "imagepath": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/dddddd/000000",
        "availability": false,
        "description": "Injury of tibial nerve at lower leg level, unspecified leg, subsequent encounter"
      }, {
        "name": "Squash - Butternut",
        "price": 4,
        "imagepath": "http://dummyimage.com/300x300.png/dddddd/000000",
        "thumnailpath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "availability": false,
        "description": "Other osteoporosis with current pathological fracture, unspecified shoulder, sequela"
      }, {
        "name": "Lobster - Canned Premium",
        "price": 53,
        "imagepath": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/dddddd/000000",
        "availability": true,
        "description": "Poisoning by antiviral drugs, intentional self-harm, sequela"
      }, {
        "name": "Pepper - Black, Whole",
        "price": 17,
        "imagepath": "http://dummyimage.com/300x300.bmp/dddddd/000000",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/dddddd/000000",
        "availability": false,
        "description": "Malignant neoplasm of dome of bladder"
      }, {
        "name": "Truffle Cups - White Paper",
        "price": 51,
        "imagepath": "http://dummyimage.com/300x300.bmp/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/cc0000/ffffff",
        "availability": true,
        "description": "Pedestrian on roller-skates injured in collision with car, pick-up truck or van in nontraffic accident, sequela"
      }, {
        "name": "Radish - Black, Winter, Organic",
        "price": 40,
        "imagepath": "http://dummyimage.com/300x300.bmp/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/dddddd/000000",
        "availability": false,
        "description": "Unspecified cataclysmic storm, initial encounter"
      }, {
        "name": "Onions - Red",
        "price": 70,
        "imagepath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
        "availability": false,
        "description": "Injury of unspecified nerve at wrist and hand level of unspecified arm"
      }, {
        "name": "Soup - Campbells - Tomato",
        "price": 81,
        "imagepath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/ff4444/ffffff",
        "availability": true,
        "description": "Unspecified open wound of left cheek and temporomandibular area, sequela"
      }, {
        "name": "Apple - Northern Spy",
        "price": 54,
        "imagepath": "http://dummyimage.com/300x300.jpg/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/ff4444/ffffff",
        "availability": false,
        "description": "Poisoning by unspecified antidepressants, accidental (unintentional)"
      }, {
        "name": "Pastry - Lemon Danish - Mini",
        "price": 97,
        "imagepath": "http://dummyimage.com/300x300.bmp/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/ff4444/ffffff",
        "availability": true,
        "description": "Other displaced fracture of sixth cervical vertebra"
      }, {
        "name": "Molasses - Fancy",
        "price": 4,
        "imagepath": "http://dummyimage.com/300x300.jpg/dddddd/000000",
        "thumnailpath": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
        "availability": false,
        "description": "Laceration of muscle, fascia and tendon of triceps, left arm, initial encounter"
      }, {
        "name": "Magnotta - Bel Paese White",
        "price": 7,
        "imagepath": "http://dummyimage.com/300x300.bmp/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/5fa2dd/ffffff",
        "availability": true,
        "description": "Nondisplaced fracture of neck of right radius, initial encounter for open fracture type I or II"
      }, {
        "name": "Capon - Breast, Wing On",
        "price": 10,
        "imagepath": "http://dummyimage.com/300x300.png/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/dddddd/000000",
        "availability": false,
        "description": "Unspecified fracture of left patella, subsequent encounter for closed fracture with routine healing"
      }, {
        "name": "Cheese - Camembert",
        "price": 84,
        "imagepath": "http://dummyimage.com/300x300.bmp/dddddd/000000",
        "thumnailpath": "http://dummyimage.com/300x300.png/ff4444/ffffff",
        "availability": true,
        "description": "Corrosions involving 80-89% of body surface with 70-79% third degree corrosion"
      }, {
        "name": "Sobe - Tropical Energy",
        "price": 39,
        "imagepath": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/ff4444/ffffff",
        "availability": true,
        "description": "Partial traumatic amputation of right breast, sequela"
      }, {
        "name": "Vodka - Smirnoff",
        "price": 58,
        "imagepath": "http://dummyimage.com/300x300.png/dddddd/000000",
        "thumnailpath": "http://dummyimage.com/300x300.png/dddddd/000000",
        "availability": false,
        "description": "Injury of brachial plexus, initial encounter"
      }, {
        "name": "Spic And Span All Purpose",
        "price": 97,
        "imagepath": "http://dummyimage.com/300x300.bmp/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/dddddd/000000",
        "availability": true,
        "description": "Epilepsy, unspecified, intractable"
      }, {
        "name": "Pastry - Carrot Muffin - Mini",
        "price": 99,
        "imagepath": "http://dummyimage.com/300x300.jpg/dddddd/000000",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/cc0000/ffffff",
        "availability": true,
        "description": "Foreign body granuloma of soft tissue, not elsewhere classified, upper arm"
      }, {
        "name": "Wine - Red, Pelee Island Merlot",
        "price": 84,
        "imagepath": "http://dummyimage.com/300x300.bmp/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
        "availability": false,
        "description": "Displaced unspecified fracture of unspecified lesser toe(s), sequela"
      }, {
        "name": "Scallops - 20/30",
        "price": 93,
        "imagepath": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/dddddd/000000",
        "availability": false,
        "description": "Other congenital malformations of cardiac septa"
      }, {
        "name": "Beets - Mini Golden",
        "price": 21,
        "imagepath": "http://dummyimage.com/300x300.jpg/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/dddddd/000000",
        "availability": false,
        "description": "Salter-Harris Type I physeal fracture of lower end of radius, right arm, subsequent encounter for fracture with nonunion"
      }, {
        "name": "Herb Du Provence - Primerba",
        "price": 73,
        "imagepath": "http://dummyimage.com/300x300.bmp/dddddd/000000",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/ff4444/ffffff",
        "availability": false,
        "description": "Anatomical narrow angle, left eye"
      }, {
        "name": "Pasta - Cheese / Spinach Bauletti",
        "price": 71,
        "imagepath": "http://dummyimage.com/300x300.bmp/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/dddddd/000000",
        "availability": true,
        "description": "Other injury of flexor muscle, fascia and tendon of left middle finger at forearm level, initial encounter"
      }, {
        "name": "Mushroom - Trumpet, Dry",
        "price": 85,
        "imagepath": "http://dummyimage.com/300x300.bmp/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff",
        "availability": false,
        "description": "Laceration of blood vessel of left thumb, initial encounter"
      }, {
        "name": "Pastry - Lemon Danish - Mini",
        "price": 96,
        "imagepath": "http://dummyimage.com/300x300.jpg/dddddd/000000",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/cc0000/ffffff",
        "availability": true,
        "description": "Strain of unspecified muscle and tendon at ankle and foot level, unspecified foot, sequela"
      }, {
        "name": "Jello - Assorted",
        "price": 13,
        "imagepath": "http://dummyimage.com/300x300.png/dddddd/000000",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/dddddd/000000",
        "availability": false,
        "description": "Sprain of medial collateral ligament of left knee, subsequent encounter"
      }, {
        "name": "Wine - Alicanca Vinho Verde",
        "price": 29,
        "imagepath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "availability": true,
        "description": "Superficial foreign body, unspecified knee, subsequent encounter"
      }, {
        "name": "Beef Ground Medium",
        "price": 72,
        "imagepath": "http://dummyimage.com/300x300.png/dddddd/000000",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff",
        "availability": true,
        "description": "Poisoning by peripheral vasodilators, accidental (unintentional), sequela"
      }, {
        "name": "Pepper - Black, Whole",
        "price": 96,
        "imagepath": "http://dummyimage.com/300x300.bmp/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/ff4444/ffffff",
        "availability": false,
        "description": "Partial loss of teeth due to periodontal diseases, class IV"
      }, {
        "name": "Rice - Brown",
        "price": 39,
        "imagepath": "http://dummyimage.com/300x300.jpg/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/5fa2dd/ffffff",
        "availability": false,
        "description": "Corrosion of first degree of unspecified ankle, sequela"
      }, {
        "name": "Shrimp - Black Tiger 8 - 12",
        "price": 50,
        "imagepath": "http://dummyimage.com/300x300.bmp/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/cc0000/ffffff",
        "availability": false,
        "description": "Fracture of unspecified metatarsal bone(s), unspecified foot, subsequent encounter for fracture with routine healing"
      }, {
        "name": "Steampan - Lid For Half Size",
        "price": 39,
        "imagepath": "http://dummyimage.com/300x300.bmp/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/dddddd/000000",
        "availability": false,
        "description": "Post-traumatic headache, unspecified, intractable"
      }, {
        "name": "Lobster - Baby, Boiled",
        "price": 82,
        "imagepath": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff",
        "availability": false,
        "description": "Nondisplaced oblique fracture of shaft of left radius, initial encounter for open fracture type I or II"
      }, {
        "name": "Wine - Marlbourough Sauv Blanc",
        "price": 85,
        "imagepath": "http://dummyimage.com/300x300.bmp/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/cc0000/ffffff",
        "availability": false,
        "description": "Puncture wound with foreign body of left forearm, subsequent encounter"
      }, {
        "name": "Oysters - Smoked",
        "price": 87,
        "imagepath": "http://dummyimage.com/300x300.jpg/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/cc0000/ffffff",
        "availability": true,
        "description": "Benign neoplasm of right epididymis"
      }, {
        "name": "Wine - White Cab Sauv.on",
        "price": 45,
        "imagepath": "http://dummyimage.com/300x300.bmp/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/cc0000/ffffff",
        "availability": false,
        "description": "Neoplasm of uncertain behavior of left renal pelvis"
      }, {
        "name": "Capicola - Hot",
        "price": 11,
        "imagepath": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/ff4444/ffffff",
        "availability": true,
        "description": "Glaucoma with increased episcleral venous pressure, bilateral"
      }, {
        "name": "Beer - Muskoka Cream Ale",
        "price": 29,
        "imagepath": "http://dummyimage.com/300x300.bmp/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/dddddd/000000",
        "availability": false,
        "description": "Other specified myopathies"
      }, {
        "name": "Appetizer - Mango Chevre",
        "price": 19,
        "imagepath": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff",
        "availability": true,
        "description": "Pathological fracture in other disease, left fibula, initial encounter for fracture"
      }, {
        "name": "Parsnip",
        "price": 92,
        "imagepath": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "availability": true,
        "description": "Toxic effect of unspecified halogen derivatives of aliphatic and aromatic hydrocarbons, undetermined, initial encounter"
      }, {
        "name": "Fish - Soup Base, Bouillon",
        "price": 79,
        "imagepath": "http://dummyimage.com/300x300.bmp/dddddd/000000",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/ff4444/ffffff",
        "availability": false,
        "description": "Strain of muscle and tendon of unspecified wall of thorax, sequela"
      }, {
        "name": "Bacardi Breezer - Tropical",
        "price": 71,
        "imagepath": "http://dummyimage.com/300x300.bmp/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff",
        "availability": true,
        "description": "Displaced intertrochanteric fracture of right femur, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing"
      }, {
        "name": "Chilli Paste, Sambal Oelek",
        "price": 68,
        "imagepath": "http://dummyimage.com/300x300.bmp/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/dddddd/000000",
        "availability": true,
        "description": "Displaced intraarticular fracture of left calcaneus"
      }, {
        "name": "Dates",
        "price": 72,
        "imagepath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/dddddd/000000",
        "availability": false,
        "description": "Other injury of muscle and tendon of back wall of thorax, sequela"
      }, {
        "name": "Cake - Pancake",
        "price": 39,
        "imagepath": "http://dummyimage.com/300x300.bmp/dddddd/000000",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/dddddd/000000",
        "availability": true,
        "description": "Kaposi's sarcoma of right lung"
      }, {
        "name": "Soup - Campbells, Butternut",
        "price": 81,
        "imagepath": "http://dummyimage.com/300x300.jpg/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/ff4444/ffffff",
        "availability": true,
        "description": "Unspecified occupant of snowmobile injured in nontraffic accident, sequela"
      }, {
        "name": "Wine - Red, Cabernet Merlot",
        "price": 2,
        "imagepath": "http://dummyimage.com/300x300.jpg/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/dddddd/000000",
        "availability": true,
        "description": "Traumatic rupture of collateral ligament of right middle finger at metacarpophalangeal and interphalangeal joint, subsequent encounter"
      }, {
        "name": "Mushroom - Chantrelle, Fresh",
        "price": 70,
        "imagepath": "http://dummyimage.com/300x300.bmp/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/ff4444/ffffff",
        "availability": true,
        "description": "Unspecified fracture of left lower leg, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion"
      }, {
        "name": "Cookie Double Choco",
        "price": 40,
        "imagepath": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/dddddd/000000",
        "availability": true,
        "description": "Displaced spiral fracture of shaft of right fibula, subsequent encounter for closed fracture with delayed healing"
      }, {
        "name": "Potatoes - Pei 10 Oz",
        "price": 45,
        "imagepath": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/ff4444/ffffff",
        "availability": true,
        "description": "Hydroureter"
      }, {
        "name": "Bread - Olive",
        "price": 24,
        "imagepath": "http://dummyimage.com/300x300.jpg/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/ff4444/ffffff",
        "availability": true,
        "description": "Other conditions related to interstitial emphysema originating in the perinatal period"
      }, {
        "name": "Beef - Tender Tips",
        "price": 31,
        "imagepath": "http://dummyimage.com/300x300.jpg/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/cc0000/ffffff",
        "availability": false,
        "description": "Occupant of animal-drawn vehicle injured in other transport accident, initial encounter"
      }, {
        "name": "Beef - Cow Feet Split",
        "price": 62,
        "imagepath": "http://dummyimage.com/300x300.bmp/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/cc0000/ffffff",
        "availability": false,
        "description": "Burn of unspecified degree of shoulder and upper limb, except wrist and hand, unspecified site, subsequent encounter"
      }, {
        "name": "Coconut - Shredded, Unsweet",
        "price": 63,
        "imagepath": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/5fa2dd/ffffff",
        "availability": true,
        "description": "Cervical disc disorder at C5-C6 level with radiculopathy"
      }, {
        "name": "Cookies Almond Hazelnut",
        "price": 43,
        "imagepath": "http://dummyimage.com/300x300.jpg/dddddd/000000",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/dddddd/000000",
        "availability": true,
        "description": "Poisoning by calcium-channel blockers, assault, initial encounter"
      }, {
        "name": "Beef - Cooked, Corned",
        "price": 4,
        "imagepath": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/5fa2dd/ffffff",
        "availability": true,
        "description": "Pedestrian with other conveyance injured in collision with two- or three-wheeled motor vehicle in traffic accident, subsequent encounter"
      }, {
        "name": "Wine - Red, Cabernet Merlot",
        "price": 56,
        "imagepath": "http://dummyimage.com/300x300.bmp/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "availability": true,
        "description": "Disorders of muscle in diseases classified elsewhere, left lower leg"
      }, {
        "name": "Vol Au Vents",
        "price": 76,
        "imagepath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/dddddd/000000",
        "availability": false,
        "description": "Legal intervention involving injury by tear gas, suspect injured"
      }, {
        "name": "Hot Choc Vending",
        "price": 33,
        "imagepath": "http://dummyimage.com/300x300.jpg/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/cc0000/ffffff",
        "availability": true,
        "description": "Partial traumatic amputation at level between right hip and knee, sequela"
      }, {
        "name": "Steampan - Foil",
        "price": 64,
        "imagepath": "http://dummyimage.com/300x300.jpg/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.bmp/ff4444/ffffff",
        "availability": true,
        "description": "Whooping cough, unspecified species without pneumonia"
      }, {
        "name": "Flour - All Purpose",
        "price": 59,
        "imagepath": "http://dummyimage.com/300x300.bmp/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/ff4444/ffffff",
        "availability": false,
        "description": "Displacement of indwelling urethral catheter, sequela"
      }, {
        "name": "Beef - Tenderloin Tails",
        "price": 52,
        "imagepath": "http://dummyimage.com/300x300.bmp/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/ff4444/ffffff",
        "availability": false,
        "description": "Open bite, unspecified knee"
      }, {
        "name": "Rolled Oats",
        "price": 41,
        "imagepath": "http://dummyimage.com/300x300.jpg/dddddd/000000",
        "thumnailpath": "http://dummyimage.com/300x300.png/dddddd/000000",
        "availability": false,
        "description": "Bitten or stung by nonvenomous insect and other nonvenomous arthropods, subsequent encounter"
      }, {
        "name": "Milk 2% 500 Ml",
        "price": 35,
        "imagepath": "http://dummyimage.com/300x300.jpg/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/dddddd/000000",
        "availability": true,
        "description": "Corrosion of unspecified degree of multiple sites of lower limb, except ankle and foot"
      }, {
        "name": "The Pop Shoppe Pinapple",
        "price": 58,
        "imagepath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/dddddd/000000",
        "availability": false,
        "description": "Other fracture of upper end of left ulna, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion"
      }, {
        "name": "Chips Potato Salt Vinegar 43g",
        "price": 98,
        "imagepath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff",
        "availability": false,
        "description": "Other chronic nonsuppurative otitis media, unspecified ear"
      }, {
        "name": "Vaccum Bag - 14x20",
        "price": 5,
        "imagepath": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
        "availability": false,
        "description": "External constriction of eyelid and periocular area"
      }, {
        "name": "Bowl 12 Oz - Showcase 92012",
        "price": 31,
        "imagepath": "http://dummyimage.com/300x300.jpg/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "availability": true,
        "description": "Asphyxiation due to being trapped in a car trunk, assault, sequela"
      }, {
        "name": "Pasta - Fusili, Dry",
        "price": 68,
        "imagepath": "http://dummyimage.com/300x300.bmp/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/ff4444/ffffff",
        "availability": true,
        "description": "Contusion of right middle finger without damage to nail"
      }, {
        "name": "Veal - Slab Bacon",
        "price": 73,
        "imagepath": "http://dummyimage.com/300x300.png/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
        "availability": false,
        "description": "Displaced fracture of neck of fifth metacarpal bone, left hand, subsequent encounter for fracture with nonunion"
      }, {
        "name": "Cup - 8oz Coffee Perforated",
        "price": 13,
        "imagepath": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/dddddd/000000",
        "availability": false,
        "description": "Monoplegia of upper limb following other cerebrovascular disease affecting right dominant side"
      }, {
        "name": "Wine - Champagne Brut Veuve",
        "price": 68,
        "imagepath": "http://dummyimage.com/300x300.bmp/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
        "availability": true,
        "description": "Other specified injury of other specified muscles and tendons at ankle and foot level, left foot, sequela"
      }, {
        "name": "Crush - Cream Soda",
        "price": 23,
        "imagepath": "http://dummyimage.com/300x300.png/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/dddddd/000000",
        "availability": true,
        "description": "Gonorrhea complicating pregnancy"
      }, {
        "name": "Savory",
        "price": 43,
        "imagepath": "http://dummyimage.com/300x300.bmp/ff4444/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff",
        "availability": false,
        "description": "Dislocation of distal end of right ulna"
      }, {
        "name": "Napkin - Beverge, White 2 - Ply",
        "price": 76,
        "imagepath": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "availability": false,
        "description": "Exposure to flames in uncontrolled fire, not in building or structure, sequela"
      }, {
        "name": "Pepper - Cayenne",
        "price": 12,
        "imagepath": "http://dummyimage.com/300x300.png/dddddd/000000",
        "thumnailpath": "http://dummyimage.com/300x300.jpg/dddddd/000000",
        "availability": false,
        "description": "Unspecified malignant neoplasm of skin of lower limb, including hip"
      }, {
        "name": "Wine - Prem Select Charddonany",
        "price": 56,
        "imagepath": "http://dummyimage.com/300x300.png/cc0000/ffffff",
        "thumnailpath": "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
        "availability": true,
        "description": "Pneumothorax, unspecified"
      }]
    data.map(item=>{
      item.createdAt=Sequelize.literal('NOW()');
      item.updatedAt=Sequelize.literal('NOW()');
      return item;
    })
      return queryInterface.bulkInsert('Products', data, {});
  },
  
  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Products', null, {});
  }
};
