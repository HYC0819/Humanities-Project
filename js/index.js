var coords = [25.04,121.535]

var map = L.map('map').setView(coords, 14);

L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

var negativeCircle = L.circle([25.024943, 121.543451], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(map);

var positiveCircle = L.circle([25.041, 121.571116], {
    color: 'lime',
    fillColor: 'green',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(map);

positiveCircle.bindPopup("<h1><span style='color: lime;' >Opportunities</span> of Urban Growth</h1><p id='opportunityButton'>Click Me!<p>", {
    minWidth : 350
});

negativeCircle.bindPopup("<h1><span style='color: red;' >Challenges</span> of Urban Growth</h1><p id='challengeButton'>Click Me!<p>", {
    minWidth : 320
});

positiveCircle.on('mouseover',function(ev) {
    ev.target.openPopup();
    document.getElementById("opportunityButton").onclick = function() {
        setTimeout(() => {
            document.location.href = "opportunity.html"
        }, 500)
    }
});

negativeCircle.on('mouseover',function(ev) {
    ev.target.openPopup();
    document.getElementById("challengeButton").onclick = function() {
        setTimeout(() => {
            document.location.href = "challenge.html"
        }, 500)
    }
});

positiveCircle.on("click", function(ev) {
    setTimeout(() => {
        document.location.href = "opportunity.html"
    }, 500)
})

negativeCircle.on("click", function(ev) {
    setTimeout(() => {
        document.location.href = "challenge.html"
    }, 500)
})