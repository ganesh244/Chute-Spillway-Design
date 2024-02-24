// Function to calculate Chute Spillway
function calculateChuteSpillway(event) {
    event.preventDefault(); // Prevent form submission
    
    // Gather inputs from form fields
    var c = parseFloat(document.getElementById("c").value);
    var i = parseFloat(document.getElementById("i").value);
    var A = parseFloat(document.getElementById("A").value);
    var H = parseFloat(document.getElementById("H").value);
    var h = parseFloat(document.getElementById("h").value);

    // Define constants
    const g = 9.81;

    // Calculate peak discharge (Qp)
    var Qp = c * i * A / 36;

    // Calculate length of weir (L)
    var X1 = Math.pow(H, 1.5);
    var L = Qp / (1.77 * X1);

    // Calculate height of fall (Hf)
    var Hf = h - (0.1 * h);

    // Calculate velocity of flow (V)
    var X2 = 2 * g * Hf;
    var V = Math.sqrt(X2);

    // Calculate initial depth (d1)
    var d1 = Qp / (L * V);

    // Calculate Froude number (Fr1)
    var X3 = g * d1;
    var X4 = Math.sqrt(X3);
    var Fr1 = V / X4;

    // Calculate sequent depth (d2)
    var X5 = 1 + (8 * Fr1 * Fr1);
    var X6 = Math.sqrt(X5);
    var X7 = X6 - 1;
    var d2 = X7 * d1 / 2;

    // Calculate height of chute/floor block (X1)
    var X8 = 0.75 * d1;

    // Calculate basin length (Lb)
    var X9 = Math.pow(Fr1, 0.38);
    var Lb = 4.5 * d2 / X9;

    // Calculate spacing of floor block from upstream of stilling basin (X3)
    var X10 = Lb / 3;

    // Calculate minimum distance of floor block from side wall (X4)
    var X11 = 3 * d1 / 8;

    // Calculate height of end sill (X5)
    var X12 = 0.07 * d2;

    // Calculate actual tail water depth (X13)
    var X13 = Math.pow(Fr1, 0.45);
    var D2 = 1.4 * X13 * d1;

    // Calculate height of side wall and wing wall at junction (J)
    var J = (d2 / 3) + D2;

    // Calculate freeboard (FB)
    var FB = d2 / 3;

    // Display results in HTML
    document.getElementById("Qp").innerText = Qp.toFixed(2);
    document.getElementById("L").innerText = L.toFixed(2);
    document.getElementById("d1").innerText = d1.toFixed(2);
    document.getElementById("Fr1").innerText = Fr1.toFixed(2);
    document.getElementById("d2").innerText = d2.toFixed(2);
    document.getElementById("X1").innerText = X8.toFixed(2);
    document.getElementById("Lb").innerText = Lb.toFixed(2);
    document.getElementById("X3").innerText = X10.toFixed(2);
    document.getElementById("X4").innerText = X11.toFixed(2);
    document.getElementById("X5").innerText = X12.toFixed(2);
    document.getElementById("X13").innerText = X13.toFixed(2);
    document.getElementById("J").innerText = J.toFixed(2);
    document.getElementById("FB").innerText = FB.toFixed(2);

    // Show results
    document.getElementById("result").style.display = "block";
}

// Attach event listener to form submission
document.getElementById("spillwayForm").addEventListener("submit", calculateChuteSpillway);
