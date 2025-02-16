var config = {
    style: 'mapbox://styles/benedettavonpalombini/cm4kp2ix200of01rxfrh14clp',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYmVuZWRldHRhdm9ucGFsb21iaW5pIiwiYSI6ImNtNGtmZ3g1dzBvZmEyaXE2dGNkNjBzancifQ.cCjwDBHebfOrZfnWvJIckA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'mercator',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<em>cloud</em> geographies',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            description: 'this atlas attempts to give some historical and spatial depth to the supposed non-place of the <em>cloud</em> by looking at materialities and infrastructures that play a critical role in the contouring data center infrastructure.',
            location: {
                center: [19.500, 22.149],
                zoom: 1.80,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'railroads_1870',
            alignment: 'right',
            hidden: false,
            description: "Rail Network 1870.<br>In her work, Ingrid Burrington describes how the development of railroads in the 19th century laid the foundation for today's data center infrastructure. Rail lines, designed to shorten distances and connect remote regions, created physical pathways that later facilitated the deployment of telecommunications and fiber-optic networks. Many modern data centers are strategically located along these historical routes, taking advantage of the rights-of-way originally established for railroads.",
            location: {
                center: [-95.408796, 34.156509],
                zoom: 2.7,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'railroad_today',
            alignment: 'left',
            hidden: false,
            description: "US Rail Network Today and Data Center locations.<br>Locations of data centers are retrieved via OpenStreetMaps; many providers do not disclose where data centers are located.",
            location: {
                center: [-95.408796, 34.156509],
                zoom: 3.5,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'selected_census',
            alignment: 'left',
            hidden: false,
            description: 'Clusters of broadband-deficient counties in the Southwest - where over 30% of the population lack fixed broadband or internet access (2020) - coincide with regions where data centers co-locate.',
            location: {
                center: [-95.408796, 34.156509],
                zoom: 4.0,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: 'springfield_holyoke',
            alignment: 'left',
            hidden: false,
            description: "Hampden County, Massachusetts, and the city of Holyoke exemplify post-industrial transformation. The river enabled the city to establish itself as a hub for manufacturing, particularly for paper and textiles. However, as industrial production shifted overseas in the mid-20th century, Holyoke faced significant economic decline, characterized by factory closures, population loss, and rising unemployment. Today, Holyoke is redefining its economic landscape by repurposing its built and environmental resources to host a data center. The city’s industrial legacy, particularly its robust energy infrastructure, makes it an attractive location for data center developers. Additionally, Massachusetts has implemented tax incentives to encourage data center development in economically struggling areas like Holyoke, aiming to spur job creation and attract technological investment. Despite these developments, the benefits of data centers have not fully addressed local socioeconomic challenges.<br><br>The median household income in Hampden County hovers around $40,000, highlighting persistent disparities in economic well-being.",
            location: {
                center: [-72.663, 42.139],
                zoom: 10.09,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'holyoke',
            alignment: 'right',
            hidden: false,
            description:"Holyoke, MA.<br> The Massachussets Green High Performance Center was planned collaboratively by various universities and established in Holyoke on a former textile mill site. Selected in 2009, construction began in October 2011, with the facility completed in November 2012.",
            location: {
                center: [-72.61163, 42.20274],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

    ]
};
