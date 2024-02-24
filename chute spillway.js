// Function to calculate Chute Spillway
function calculateChuteSpillway(event) {
    event.preventDefault(); // Prevent form submission
    
    // Gather inputs
    var c = parseFloat(document.getElementById("c").value);
    var i = parseFloat(document.getElementById("i").value);
    var A = parseFloat(document.getElementById("A").value);
    var H = parseFloat(document.getElementById("H").value);
    var h = parseFloat(document.getElementById("h").value);
    var Ke = parseFloat(document.getElementById("Ke").value);
    var Kc = parseFloat(document.getElementById("Kc").value);
    var l = parseFloat(document.getElementById("l").value);

    // Calculate peak discharge
    var Qp = (c * i * A) / 36;

    // Calculate length of weir
    var L = Qp / (1.77 * Math.pow(H, 1.5));

    // Calculate initial depth
    var d1 = Qp / (L * Math.sqrt(2 * 9.81 * (h - 0.1 * h)));

    // Calculate Froud Number
    var Fr1 = Math.sqrt((9.81 * d1) / Math.sqrt(2 * 9.81 * (h - 0.1 * h)));

    // Calculate sequent depth
    var d2 = (Math.sqrt(1 + 8 * Math.pow(Fr1, 2)) - 1) * d1 / 2;

    // Calculate other parameters
    var chuteHeight = d1;
    var chuteWidth = 0.75 * d1;
    var Lb = 4.5 * d2 / Math.pow(Fr1, 0.38);
    var spacingFromUpstream = Lb / 3;
    var minDistanceFromSideWall = 3 * d1 / 8;
    var endSillHeight = 0.07 * d2;
    var D2 = 1.4 * Math.pow(Fr1, 0.45) * d1;
    var sideWallHeight = (d2 / 3) + D2;
    var freeboard = d2 / 3;

    // Display results
    document.getElementById("Qp").innerText = Qp.toFixed(2);
    document.getElementById("L").innerText = L.toFixed(2);
    document.getElementById("d1").innerText = d1.toFixed(2);
    document.getElementById("Fr1").innerText = Fr1.toFixed(2);
    document.getElementById("d2").innerText = d2.toFixed(2);
    document.getElementById("chuteHeight").innerText = chuteHeight.toFixed(2);
    document.getElementById("chuteWidth").innerText = chuteWidth.toFixed(2);
    document.getElementById("Lb").innerText = Lb.toFixed(2);
    document.getElementById("spacingFromUpstream").innerText = spacingFromUpstream.toFixed(2);
    document.getElementById("minDistanceFromSideWall").innerText = minDistanceFromSideWall.toFixed(2);
    document.getElementById("endSillHeight").innerText = endSillHeight.toFixed(2);
    document.getElementById("D2").innerText = D2.toFixed(2);
    document.getElementById("sideWallHeight").innerText = sideWallHeight.toFixed(2);
    document.getElementById("freeboard").innerText = freeboard.toFixed(2);

    // Show results
    document.getElementById("result").style.display = "block";
}

// Attach event listener to form submission
document.getElementById("spillwayForm").addEventListener("submit", calculateChuteSpillway);
