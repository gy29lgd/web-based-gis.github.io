//Markers for sites in the Built Tourism category
var built_markers = [
{
'id':1,	//the unique identifier for each data entry
'name':'Westgate Oxford',	//the title of the attraction
'briefExplanation':'A shopping destination for high street and luxury fashion brands, restaurants, cafes and parking available.',	//A brief explanation of what is at the attraction
'entryFee':'No',	//Is there an entry fee for this attraction?
'disabledAccess':'Yes',	//Is there disabled access?
'URL': 'https://westgateoxford.co.uk/',	//A URL link to the attractions official website if available
'easting':451090,	//The easting co-ordinate of the site
'northing':205941,	//the northing co-ordinate of the site
},
{
'id':2,
'name':'Bicester Village',
'briefExplanation':'A shopping destination for luxury brands, with restaurants and parking available.',
'entryFee':'No',
'disabledAccess':'Yes',
'URL': 'https://www.tbvsc.com/bicester-village/en',
'easting': 458134,
'northing':221850,
},
{
'id':3,
'name':'Oxford University Museum of Natural History',
'briefExplanation':'A museum with animal collections on display and exhibitions.',
'entryFee':'No',
'disabledAccess':'Yes',
'URL': 'https://www.oumnh.ox.ac.uk/#/',
'easting':451485,
'northing':206929,
},
{
'id':4,
'name':'Didcot Railway Centre',
'briefExplanation':'A collection of steam engine trains and carriages.',
'entryFee':'Yes',
'disabledAccess':'Yes',
'URL': 'https://didcotrailwaycentre.org.uk/',
'easting':452427,
'northing':190790,
},
{
'id':5,
'name':'River and Rowing Museum',
'briefExplanation':'A museum displaying exhibits about rowing and the town of Henley-on-Thames. ',
'entryFee':'Yes',
'disabledAccess':'Yes',
'URL': 'https://www.rrm.co.uk/',
'easting':476681,
'northing':182069,
},
{
'id':6,
'name':'Bodleian Libraries',
'briefExplanation':'A collection of libraries with resources on a range of subjects.',
'entryFee':'Yes - Bodleian Reader Card required',
'disabledAccess':'Yes',
'URL': 'https://www.bodleian.ox.ac.uk/#/',
'easting':451588,
'northing':206416,
},
{
'id':7,
'name':'Bridge of Sighs',
'briefExplanation':'A bridge joining two buildings belonging to the University of Oxford.',
'entryFee':'No',
'disabledAccess':'Yes',
'URL': 'Not Available',
'easting':451610,
'northing':206465,
},
{
'id':8,
'name':'Ashmolean Museum',
'briefExplanation':'A museum displaying collections from around the world, including statues, paintings and pottery.',
'entryFee':'No',
'disabledAccess':'Yes',
'URL': 'https://www.ashmolean.org/',
'easting':451171,
'northing':206563,
},
{
'id':9,
'name':'History of Science Museum - University of Oxford',
'briefExplanation':'A museum displaying artefacts with importance to the histroy of science. It notably includes a chalkboard written on by Albert Einstein.',
'entryFee':'No',
'disabledAccess':'Yes',
'URL': 'https://www.hsm.ox.ac.uk/',
'easting':451494,
'northing':206439,
},
{
'id':10,
'name':'Pitt Rivers Museum - University of Oxford',
'briefExplanation':'A museum displaying collections from countries and cultures from around the world.',
'entryFee':'No',
'disabledAccess':'Yes',
'URL': 'https://www.prm.ox.ac.uk/',
'easting':451451,
'northing':206917,
},
{
'id':11,
'name':'Solidiers of Oxfordshire Museum',
'briefExplanation':'A museum telling the stories of soldiers from Oxfordshire.',
'entryFee':'Yes',
'disabledAccess':'Yes',
'URL': 'https://www.sofo.org.uk/',
'easting':444366,
'northing':216800,
}
]


//Markers for attractions in the natural tourism category
var natural_markers = [
{
'id':1,	//the unique identifier for each data entry
'name':'Culham Lock on the River Thames',	//the title of the attraction
'briefExplanation':'A lock on the River Thames with walking routes on the Thames Path up and down river.',	//A brief explanation of what is at the attraction
'entryFee':'No',	//Is there an entry fee for this attraction?
'disabledAccess':'Yes',	//Is there disabled access?
'URL':'https://www.visitthames.co.uk/about-the-river/river-thames-locks/culham-lock',	//A URL link to the organisations website
'easting':450759,	//The easting co-ordinate of the site
'northing':194887,	//the northing co-ordinate of the site
},
{
'id':2,
'name':'Wittenham Clumps',
'briefExplanation':'Two large hills dating back to the Roman era. The site has many walking routes and is close to the River Thames.',
'entryFee':'No',
'disabledAccess':'Yes - limited',
'URL':'https://earthtrust.org.uk/visit-us/wittenham-clumps/',
'easting':456776,
'northing':192579,
},
{
'id':3,
'name':'Oxford Botanic Gardens',
'briefExplanation':'A collection of plants, including trees and flowering plants. Several greenhouses with plants from different environments.',
'entryFee':'Yes',
'disabledAccess':'Yes',
'URL':'https://www.obga.ox.ac.uk/visit-garden',
'easting':452054,
'northing':206115,
},
{
'id':4,
'name':'Waterperry Gardens',
'briefExplanation':'A large collection of flowering plants and trees near Oxford. A garden centre is also located on site.',
'entryFee':'Yes',
'disabledAccess':'Yes',
'URL':'https://www.waterperrygardens.co.uk/',
'easting':462995,
'northing':206378,
},
{
'id':5,
'name':'Shotover Country Park',
'briefExplanation':'An area with mixed habitats and wildlife, ranging from ancient woodland to scrubland. Walking, cycling and horseriding routes available.',
'entryFee':'No',
'disabledAccess':'Yes',
'URL':'https://www.oxford.gov.uk/shotover',
'easting':456398,
'northing':206213,
},
{
'id':6,
'name':'Wytham Woods',
'briefExplanation':'Woodland and ancient woodland site with walking routes.',
'entryFee':'No - Walking Permit required',
'disabledAccess':'Yes',
'URL':'https://www.wythamwoods.ox.ac.uk/#/',
'easting':446835,
'northing':208535,
},
{
'id':7,
'name':'Farmoor Reservoir',
'briefExplanation':'A reservoir with opportunities for walking, sailing, fishing and bird watching.',
'entryFee':'No - some activities require additional fees',
'disabledAccess':'Yes',
'URL':'https://www.thameswater.co.uk/about-us/responsibility/days-out/farmoor-reservoir',
'easting':445105,
'northing':206078,
},
{
'id':8,
'name':'Harcourt Arboretum',
'briefExplanation':'A woodland with a wide range of tree species. Walking routes available.',
'entryFee':'Yes',
'disabledAccess':'Yes',
'URL':'https://www.obga.ox.ac.uk/visit-arboretum',
'easting':455507,
'northing':198734,
}
]


//Markers for sites in the Heritage attraction category
var heritage_markers = [
{
'id':1,	//the unique identifier for each data entry
'name':'Blenheim Palace',	//the title of the attraction
'briefExplanation':'A historic house, gardens and park with several walking routes.',	//A brief explanation of what is at the attraction
'entryFee':'Yes',	//Is there an entry fee for this attraction?
'disabledAccess':'Yes',	//Is there disabled access?
'URL':'https://www.blenheimpalace.com/',	//A URL link to the organisations website
'easting':444186,	//The easting co-ordinate of the site
'northing':216205,	//the northing co-ordinate of the site
},
{
'id':2,
'name':'Abingdon County Hall',
'briefExplanation':'A museum displaying artefacts from the history of Abingdon town.',
'entryFee':'No',
'disabledAccess':'Yes',
'URL':'https://www.abingdon.gov.uk/abingdon-county-hall-museum',
'easting':449786,
'northing':197052,
},
{
'id':3,
'name':'White Horse Hill',
'briefExplanation':'A chalk horse carved into the Ridgeway. Many walking routes available.',
'entryFee':'No',
'disabledAccess':'Yes - limited',
'URL':'https://www.nationaltrust.org.uk/white-horse-hill',
'easting':430124,
'northing':186625,
},
{
'id':4,
'name':'Waylands Smithy',
'briefExplanation':'A historic site located near the Ridgeway.',
'entryFee':'No',
'disabledAccess':'Yes - limited',
'URL':'https://www.english-heritage.org.uk/visit/places/waylands-smithy/',
'easting':428091,
'northing':185400,
},
{
'id':5,
'name':'North Leigh Roman Villa',
'briefExplanation':'The remains of a Roman villa.',
'entryFee':'No',
'disabledAccess':'Yes',
'URL':'https://www.english-heritage.org.uk/visit/places/north-leigh-roman-villa/',
'easting':439653,
'northing':215468,
},
{
'id':6,
'name':'Oxford Castle and Prison',
'briefExplanation':'Visit the old Oxford Prison cells and castle with views across the city.',
'entryFee':'No',
'disabledAccess':'Yes - limited',
'URL':'https://www.oxfordcastleandprison.co.uk/',
'easting':450964,
'northing':206170,
},
{
'id':7,
'name':'Winston Churchills Grave',
'briefExplanation':'The grave site of Winston Churchill.',
'entryFee':'No',
'disabledAccess':'Yes',
'URL':'Not Available',
'easting':444916,
'northing':214826,
},
{
'id':8,
'name':'Sulgrave Manor and Garden',
'briefExplanation':'A house and garden which is the ancestoral home of George Washington.',
'entryFee':'Yes',
'disabledAccess':'Yes - limited',
'URL':'https://sulgravemanor.org.uk/',
'easting':456024,
'northing':245585,
}
]