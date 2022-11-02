var coords = [25.04,121.535]

function toggleCitations() {
    if (document.getElementById("outerCitation").style.visibility == "visible") {
        document.getElementById("outerCitation").style.visibility = "hidden"
    } else {
        document.getElementById("outerCitation").style.visibility = "visible"
    }
}

function togglePresentationInfo() {
    if (document.getElementById("outerPresentationInfo").style.visibility == "visible") {
        document.getElementById("outerPresentationInfo").style.visibility = "hidden"
    } else {
        document.getElementById("outerPresentationInfo").style.visibility = "visible"
    }
}

var corner1 = L.latLng(15.04,80.535),
corner2 = L.latLng(40.04,140.535),
bounds = L.latLngBounds(corner1, corner2);

var options = {
    minZoom: 3,
    maxBounds: bounds,
}

var map = L.map('map', options).setView(coords, 14);

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

positiveCircle.bindPopup("<h1><span style='color: lime;' >Opportunities</span> of Urban Growth</h1><p id='opportunityButton'>Click on me to see more detail!<p>", {
    minWidth : 350
});

negativeCircle.bindPopup("<h1><span style='color: red;' >Challenges</span> of Urban Growth</h1><p id='challengeButton'>Click on me to see more detail!<p>", {
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

document.getElementById("toggleCitations").onclick = function() {
    toggleCitations()
}

document.getElementById("citationBar").onclick = function() {
    toggleCitations()
}

document.getElementById("togglePresentationInfo").onclick = function() {
    togglePresentationInfo()
}

document.getElementById("presentationInfoBar").onclick = function() {
    togglePresentationInfo()
}