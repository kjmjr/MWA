// JavaScript source code

/*
 * 
 * 
<ul id="functionality-list">
    <li class="functionality-header open">Functionality: </li>
    <li class="functionality-text open"> *Note that every item is priced per page</li>
    <li class="functionality-text open">Form system - $100 </li>
    <li class="functionality-text open">Star rating system - $60</li>
    <li class="functionality-text open">Animations - $75 </li>
    <li class="functionality-text open">Maps - $20</li>
    <li class="functionality-text open">Alerts - $30</li>
    <li class="functionality-text open">Search box system - $60</li>
    <li class="functionality-text open">Created text buttons - $40</li>
</ul>


var functionalityArray = ['Functionality:', '*Note that every item is priced per page',
    'Form system - $100', 'Star rating system - $60',
    'Star rating system - $60', 'Animations - $75 ',
    'Maps - $20', 'Alerts - $30', 'Search box system - $60', 'Created text buttons - $40'];



var Maintenance_button = document.querySelector('#Maintenance_id_button');

Maintenance_button.addEventListener('click', (e) => {


    var maintenceText = document.createElement('p');

    maintenceText.textContent = "MWA(McAdoo's Web Agency) wants to make sure" +
        "that customers meet their goal which is to build a brighter customer base! The reason we" +
        "charge a maintenance fee is to not only keep you as a customer but to make sure your" +
        "website is up to speed and protected from spam and malicious cyber attacks.";


   // maintenceText.setAttribute("id", "result");
   // maintenceText.setAttribute("class", "dynamic");

    document.body.appendChild(maintenceText);



});//end of event listener

function init() {
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(40.782710, -73.965310),
        mapTypeId: google.maps.mapTypeId.ROADMAP,

        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.zoomControlStyle.SMALL,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.TOP_LEFT
        },
        scaleControl: true,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER
        },
        streetViewControl: false,
        overViewMapControl: false

    };
    var venueMap;
    venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

}//end function

function loadScript() {
    var script = document.createElement('script');
    script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
    document.body.appendChild(script);
}//end function

window.onload = loadScript;

style: [
    {
        stylers: [
            { hue: "#00ff6f" }
            {saturation: -50}
        ]

    }, {

        featureType: "road",
        elementType: "geometry",
        stylers: [
            { lightness: 100 },
            {visibility: "simplified"}
        ]
    }, {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
            { hue: "#ff6600" },
            {saturation: +80}
        ]
    }, {
        featureType: "transit",
        elementType: "labels",
        stylers: [
            { hue: "#ff0066" },
            { saturation: +80 }
        ]
    }
]

    (function (){

    var $imgs = $('gallery img');
    var $search = $('#filter-search');
    var cache = [];

        $imgs.each(function () {

            cache.push({

                element: this,
                text: this.alt.trim().toLowerCase()
            });
        });

        function filter() {

            var query = this.value.trim().toLowerCase();

            cache.forEach(function (img) {

                var index = 0;
                if (query) {

                    index = img.text.indexOf(query);
                }

                img.element.style.display = index === -1 ? 'none' : '';
            });
        }

        if ('oninput' in $search[0]) {
            $search.on('input', filter);
        }//end if
        else {

            $search.on('keyup', filter);
        }

    }());
*/







